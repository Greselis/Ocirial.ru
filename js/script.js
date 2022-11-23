function copyToClipboard(text) {
    var copytext=document.createElement('input')
    if(typeof text=='undefined') copytext.value="void.ocirial.ru"
    else copytext.value=text
    document.body.appendChild(copytext)
    copytext.select()
    document.execCommand('copy')
    document.body.removeChild(copytext)
}