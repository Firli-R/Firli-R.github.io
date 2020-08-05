var webPush = require('web-push');
const vapidKeys = {
    "publicKey":"BJIy06hoPv8yITfSyFtpapPpuzBK0T6dU4FnqQMIilyPp56acp8s3Zh7tr4i-tShcwFJVvFcVd3S7SHyHn-hvQw",
    "privateKey":"Bm96E7ZngMpnDFWhcvtoyRVJi3JdBlMRrjAI__VcNvM"
};
 
 
webPush.setVapidDetails(
    'mailto:firlisubhi12@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint":"https://fcm.googleapis.com/fcm/send/cAdQ6EA0gBc:APA91bFYHOG-UCeY7j5Alo2KCTVf6fWWfs5vpWYc23OQhwvSZZFNAcAwnyAZj8kp68UGXfMsf4aGN845sVQRvAoRueoMZ03EMhbQ0HbeeSsx8Lrlvv5Uevms_U8hmbrSKRhQXR2uCETn",
    "keys": {
        "p256dh":"BPfPBxri++KGHTnIouZMe4i+Nr9c89FyYU4pB/vRoZoQ/GSdeFGAWjaZ1G8n7+FG67metu+FhuFXZQbq5B5AAl4=",
        "auth":"FC6x+ugJTTATblEo9Z5QVA=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
var options = {
    gcmAPIKey: '540043360209',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);