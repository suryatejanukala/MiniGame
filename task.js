var allrightCircle = document.querySelectorAll(".rigthCircle")
function fun(val)
{
    if(val=="one")
    {
        allrightCircle[0].style.transform="translate(-59vw)";
        allrightCircle[1].style.transform="translate(0vw)";
        allrightCircle[2].style.transform="translate(0vw)";
        allrightCircle[0].style.backgroundColor = "green"
        allrightCircle[1].style.backgroundColor = "red"
        allrightCircle[2].style.backgroundColor = "red"
    }
    else if(val=="two")
    {
        allrightCircle[1].style.transform="translate(-59vw)";
        allrightCircle[0].style.transform="translate(0vw)";
        allrightCircle[2].style.transform="translate(0vw)";
        allrightCircle[0].style.backgroundColor = "red"
        allrightCircle[1].style.backgroundColor = "green"
        allrightCircle[2].style.backgroundColor = "red"
    }
    else if(val=="three")
    {
        allrightCircle[2].style.transform="translate(-59vw)";
        allrightCircle[0].style.transform="translate(0vw)";
        allrightCircle[1].style.transform="translate(0vw)";
        allrightCircle[0].style.backgroundColor = "red"
        allrightCircle[1].style.backgroundColor = "red"
        allrightCircle[2].style.backgroundColor = "green"
    }
    else
    {
        allrightCircle[0].style.transform="translate(0vw)";
        allrightCircle[1].style.transform="translate(0vw)";
        allrightCircle[2].style.transform="translate(0vw)";
        allrightCircle[0].style.backgroundColor = "red"
        allrightCircle[1].style.backgroundColor = "red"
        allrightCircle[2].style.backgroundColor = "red"
    }
}
