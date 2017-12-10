function choose(td){
    var content = document.getElementById("content");
    var result = document.getElementById("result");
    var text = td.innerText;
    if(text  == "AC")
   {
        content.innerText = "";
        result.innerText = " ";
    }
    else if(text == "=" )
    {
        var resultText = calcutor(content.innerText);
        result.innerText = resultText;
    }
    else if(text == "Del")
    {
        if(content.innerText.length > 0)
        {
            content.innerText = content.innerText.substring(0,content.innerText.length-1);
        }
    }
    else
    {
        content.innerText = content.innerText + text;
    }

}
function calcutor(content)
{
    var index = content.lastIndexOf("(");
    if(index > -1)
    {
        var endIndex = content.indexOf(")",index);
        if(endIndex > -1)
        {
            var result = calcutor(content.substring(index + 1,endIndex));
            return calcutor(content.substring(0,index) + ("" + result) + content.substring(endIndex + 1))
        }
    }
    index = content.indexOf("+");
    if(index > -1)
    {
        return calcutor(content.substring(0,index)) + calcutor(content.substring(index + 1));
    }

    index = content.lastIndexOf("-");
    if(index > -1)
    {
        return calcutor(content.substring(0,index)) - calcutor(content.substring(index + 1));
    }

    index = content.lastIndexOf("*");

    if(index > -1)
    {
        return calcutor(content.substring(0,index)) * calcutor(content.substring(index + 1));
    }

    index = content.lastIndexOf("/");

    if(index > -1)
    {
        return calcutor(content.substring(0,index)) / calcutor(content.substring(index + 1));
    }

    if("" == content)
    {
        return 0;
    }
    else
    {
        return content - 1 + 1;
    }
}
