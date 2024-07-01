// const os = () => {
//     var ua = navigator.userAgent,
//         isWindowsPhone = /(?:Windows Phone)/.test(ua),
//         isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
//         isAndroid = /(?:Android)/.test(ua),
//         isFireFox = /(?:Firefox)/.test(ua),
//         isChrome = /(?:Chrome|CriOS)/.test(ua),
//         isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
//         isPhone = /(?:iPhone)/.test(ua) && !isTablet,
//         isPc = !isPhone && !isAndroid && !isSymbian;
//     console.log(isPhone, isTablet, isAndroid, isPc);
//     return {
//         isTablet: isTablet,
//         isPhone: isPhone,
//         isAndroid: isAndroid,
//         isPc: isPc
//     };
// };

// const isMobile = os().isPhone||os().isAndroid ? 'mobile' : 'pc';

// new CozeWebSDK.WebChatClient({
//     config: {
//         bot_id: '7329451068314714113',
//     },
//     componentProps: {
//         title: 'Coze',
//         layout: isMobile,
//     },
// });
