document.getElementById('scanBtn').addEventListener('click', function() {
    var qrCodeScanner = new Instascan.Scanner({ video: document.getElementById('preview') });
    var scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
    qrCodeScanner.addListener('scan', function(content) {
        if (isChinese(content)) {
            alert('姓名：' + content);
        } else {
            alert('不支持查看');
        }
    });
    qrCodeScanner.start();
});

function isChinese(str) {
    var len = str.length;
    for (var i = 0; i < len; i++) {
        var char = str.charAt(i);
        if (char >= '\u4e00' && char <= '\u9fa5') {
            return true;
        }
    }
    return false;
}
