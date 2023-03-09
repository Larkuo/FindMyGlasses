# This file is a script to convert the existing images
#      from png to jpeg & corresponding xml files to 
#      match the file convertions
from os import error, listdir
from os.path import isfile
import ntpath

from PIL import Image
import xml.etree.ElementTree as ET



def get_img_file_names(dirPath: str) -> list[str]:
    allFiles = listdir(dirPath)
    imgFiles = [img for img in allFiles if isfile(dirPath+'/'+img) and img.__contains__('png')]
        
    return imgFiles


def get_xml_file_names(dirPath: str) -> list[str]:
    allFiles = listdir(dirPath)
    xmlFiles = [xml for xml in allFiles if isfile(dirPath+'/'+xml) and xml.__contains__('xml')]

    return xmlFiles


def png_to_jpeg(pngPath: str, jpegPath: str):
    try:
        if isfile(pngPath):
            imgPng = Image.open(pngPath)
            imgPng.save(jpegPath)
        else:
            print('File ['+pngPath+'] does not exist.')
    except error as e:
        print('ERROR: Could not convert png to jpeg\n',e)    


def edit_annotation_file(xmlPath: str, jpegPath: str, newXmlPath: str, folderName: str):
    try:
        if isfile(xmlPath):
            xmlTree = ET.parse(xmlPath)
            xmlRoot = xmlTree.getroot()

            xmlFolders = xmlRoot.iter('folder')
            for folder in xmlFolders:
                folder.text = folderName

            xmlFilenames = xmlRoot.iter('filename')
            for name in xmlFilenames:
                jpegFileName = ntpath.basename(jpegPath)
                name.text = jpegFileName

            xmlPaths = xmlRoot.iter('path')
            for _path in xmlPaths:
                _path.text = jpegPath

            xmlTree.write(newXmlPath)
                
        else:
            print('File ['+xmlPath+'] does not exist.')
    except error as e:
        print('ERROR: Could not edit xml file\n',e)


def convert_img_xml(pngPath: str, jpegPath: str, xmlPath: str, newXmlPath: str, folderName: str):
    png_to_jpeg(pngPath, jpegPath)
    edit_annotation_file(xmlPath, jpegPath, newXmlPath, folderName)

def main():
    BASE_DATA_PATH = 'C:/Users/Larkuo/Documents/Personal Projects/FindMyGlasses/model_training/data/data_v1'

    pngFolderPaths = ['/data_png/train','/data_png/validate']
    jpegFolderPaths = ['/data_jpeg/train','/data_jpeg/validate']

    # getting file names
    for i in range(2):
        totalPngPath = BASE_DATA_PATH + pngFolderPaths[i]
        totalJpegPath = BASE_DATA_PATH + jpegFolderPaths[i]

        imgNames = get_img_file_names(totalPngPath)
        xmlNames = get_xml_file_names(totalPngPath)

        print('=======================')
        print('totalPngPath:', totalPngPath)
        print('totalJpegPath:', totalJpegPath)
        print('=======================')

        for x in range(len(imgNames)):
            imgName = imgNames[x]
            xmlName = xmlNames[x]

            pngPath = totalPngPath + '/' + imgName
            xmlPath = totalPngPath + '/' + xmlName

            jpegPath = totalJpegPath + '/' + imgName.replace('png', 'jpeg').replace('resized_img', 'img') 
            newXmlPath = totalJpegPath + '/' + xmlName.replace('resized_img', 'img')

            folderName = 'validate'

            if('train' in pngFolderPaths[i]):
                folderName = 'train'
            else:
                folderName = 'validate'

            print('-------------------------------')

            print('pngPath: ', pngPath)
            print('xmlPath: ', xmlPath)
            print('folderName: ', folderName)

            convert_img_xml(pngPath, jpegPath,
                            xmlPath, newXmlPath,
                            folderName)
            
            print('<-----CONVERSION COMPLETE----->')
            print('jpegPath: ', jpegPath)
            print('newXmlPath: ', newXmlPath)
        
            print('-------------------------------')
                







if __name__ == "__main__":
    main()