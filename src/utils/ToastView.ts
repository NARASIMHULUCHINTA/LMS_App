import Toast from "react-native-toast-message";


export function ToastView(ToastData: any) {
    Toast.show({
        type: ToastData.type,
        position: ToastData.position,
        text1: ToastData.text1,
        text2: ToastData.text2,
    });
} 