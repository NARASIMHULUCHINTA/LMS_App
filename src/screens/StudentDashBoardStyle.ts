import { StyleSheet } from 'react-native';
import { Colors, Typography, minxmins } from '../styles';

const styles = StyleSheet.create({
    maincontainer:{
        flex: 1,
         padding: 16
    },
    mainheading:{
        fontSize: Typography.FONT_SIZE_22, 
        fontFamily:Typography.FONT_FAMILY_MEDIUM,
        marginBottom: 16 ,
        color:Colors.BLUESHADE
    },
    nocoursestext:{
        textAlign: 'center' ,
        color:Colors.GRAY_DARK,
        fontFamily:Typography.FONT_FAMILY_MEDIUM,
    },
    coursecontainer:{
        marginBottom: 16,
        padding: 16,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
      },
      image:{ 
        width: '100%',
         height: undefined,
         aspectRatio:2, 
         marginRight: 16
    },
    coursename:{
         fontSize: Typography.FONT_SIZE_20,
        fontFamily:Typography.FONT_FAMILY_MEDIUM,
        color:Colors.BLUESHADE,   
    },
    text:{
        fontSize: Typography.FONT_SIZE_14,
        fontFamily:Typography.FONT_FAMILY_REGULAR,
        color:Colors.GRAY_DARK,
        paddingTop:4,
    },
    row:{
        flexDirection:'row',        
    },
    arrowicon:{
        color:Colors.BLACK,
        padding:4,
    }
});

export default styles;