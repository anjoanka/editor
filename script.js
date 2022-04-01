const textStyle = document.querySelector('.textStyle');
const contentPreviewer = document.querySelector('.contentPreviewer')

//chechboxes (bold, italic..)

textStyle.addEventListener('click', function (event) {
    const value = event.target.dataset.value;
    const property = event.target.dataset.property;

    if (event.target.checked) {
        contentPreviewer.style[property] = value
    } else {
        contentPreviewer.style[property] = 'initial'
    }
});


//radio textAlign


const radioTextAlign = document.querySelector('.radioTextAlign')

radioTextAlign.addEventListener('click', function (e) {
    console.log(e.target.dataset.align)
    contentPreviewer.style.textAlign = e.target.dataset.align;

})


//modal colorPicker

const modalColors = document.querySelector('.modal-color');

let colors = ['#ff6666', '#ff8c66', '#ffd966', '#ffff66', '#d9ff66', '#8cff66', '#66ff8c', '#66ffd9', '#66ffff', '#66b3ff', '#6666ff', '#8c66ff', '#b366ff', '#ff66ff', '#ff66d9', '#ff668c', '#fff', '#000'];

function createColorItem(color) {
    const colorEl = document.createElement('div');


    colorEl.classList.add('colorItem')
    colorEl.style.background = color;

    colorEl.addEventListener('click', function () {
        contentPreviewer.style.color = color;
    })


    return colorEl
}

colors.forEach(color => {
    modalColors.appendChild(createColorItem(color))
})


//modal backgroundPicker

const modalBackground = document.querySelector('.modal-background');


function createBackgroundItem(background) {
    const colorEl = document.createElement('div');


    colorEl.classList.add('colorItem')
    colorEl.style.background = background;

    colorEl.addEventListener('click', function () {
        contentPreviewer.style.background = background;
    })


    return colorEl
}

colors.forEach(background => {
    modalBackground.appendChild(createBackgroundItem(background))
})

//modal backgroundImage

const backgroundImage = document.querySelector('.modal-backgroundImage');

const images = ['https://img2.akspic.ru/crops/0/6/4/7460/7460-kraternoe_ozero-pejzazhi_gor-voda-rassvet-pejzazhi-1920x1080.jpg',
    'https://img4.goodfon.ru/wallpaper/nbig/1/bf/zakat-vecher-more-pliazh.jpg',
    'https://img1.goodfon.ru/wallpaper/nbig/7/e2/kanada-peyzazh-ozero-les-gory.jpg',
    'https://images.wallpaperscraft.ru/image/single/gory_ozero_pejzazh_142038_1920x1080.jpg',
    'https://wallpapers-fenix.eu/full/160604/070528863.jpg'
,'https://perets.media/wp-content/uploads/2019/11/Syajvo.jpg']



function showBackgroundImage(image) {
    const div = document.createElement("div"),
        img = document.createElement('img')
    img.src = image;

    backgroundImage.appendChild(div)
    img.classList.add('divImg')
    div.appendChild(img)
    div.style.backgroundImage = image;


    img.addEventListener('click', function (e) {
        contentPreviewer.style.backgroundImage = 'url(' + e.target.src + ')'
        contentPreviewer.style.backgroundSize = 'cover';
        contentPreviewer.style.backgroundReapeat = 'no-repeat';
        contentPreviewer.style.backgroundPosition = 'center';
    })
    return div
}

images.forEach(image => {
    backgroundImage.appendChild(showBackgroundImage(image))
})



const fontFamilyDropdown = document.querySelector('.fontFamily-dropdown');
const fontSizeDropdown = document.querySelector('.fontSize-dropdown');


fontFamilyDropdown.addEventListener('click', function (e) {
    const font = e.target.dataset.font;
    contentPreviewer.style.fontFamily = font;
});


fontSizeDropdown.addEventListener('click', function (e) {
    const size = e.target.dataset.size;
    contentPreviewer.style.fontSize = size;
})



const inputElement = document.getElementById("myfile");
const previewElement = document.querySelector(".contentPreviewer");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
    const fileList = this.files; /* now you can work with the file list */

    console.log(fileList[0]);

    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = window.URL.createObjectURL(fileList[0]);
    previewElement.style.backgroundImage = `url(${imageUrl})`
}