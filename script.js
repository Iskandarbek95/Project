var modal_1 = document.getElementById('simple-modal-1');
var modal_2 = document.getElementById('simple-modal-2');
var modal_3 = document.getElementById('simple-modal-3');
var modal_4 = document.getElementById('simple-modal-4');
var modal_5 = document.getElementById('simple-modal-5');
var modal_6 = document.getElementById('simple-modal-6');
var open_1 = document.getElementById('open-video-1');
var open_2 = document.getElementById('open-video-2');
var open_3 = document.getElementById('open-video-3');
var open_4 = document.getElementById('open-video-4');
var open_5 = document.getElementById('open-video-5');
var open_6 = document.getElementById('open-video-6');

open_1.addEventListener('click', openModal_1);
function openModal_1() {
    modal_1.style.display = 'block';
}

modal_1.addEventListener('click', closeModal_1);
function closeModal_1(e) {
    if (e.path[0] === modal_1) {
        return modal_1.style.display = 'none';
    } else {
        modal_1.style.display = 'block';
    }
}

open_2.addEventListener('click', openModal_2);
function openModal_2() {
    modal_2.style.display = 'block';
}

modal_2.addEventListener('click', closeModal_2);
function closeModal_2(e) {
    if (e.path[0] === modal_2) {
        return modal_2.style.display = 'none';
    } else {
        modal_2.style.display = 'block';
    }
}

open_3.addEventListener('click', openModal_3);
function openModal_3() {
    modal_3.style.display = 'block';
}

modal_3.addEventListener('click', closeModal_3);
function closeModal_3(e) {
    if (e.path[0] === modal_3) {
        return modal_3.style.display = 'none';
    } else {
        modal_3.style.display = 'block';
    }
}

open_4.addEventListener('click', openModal_4);
function openModal_4() {
    modal_4.style.display = 'block';
}

modal_4.addEventListener('click', closeModal_4);
function closeModal_4(e) {
    if (e.path[0] === modal_4) {
        return modal_4.style.display = 'none';
    } else {
        modal_4.style.display = 'block';
    }
}

open_5.addEventListener('click', openModal_5);
function openModal_5() {
    modal_5.style.display = 'block';
}

modal_5.addEventListener('click', closeModal_5);
function closeModal_5(e) {
    if (e.path[0] === modal_5) {
        return modal_5.style.display = 'none';
    } else {
        modal_5.style.display = 'block';
    }
}

open_6.addEventListener('click', openModal_6);
function openModal_6() {
    modal_6.style.display = 'block';
}

modal_6.addEventListener('click', closeModal_6);
function closeModal_6(e) {
    if (e.path[0] === modal_6) {
        return modal_6.style.display = 'none';
    } else {
        modal_6.style.display = 'block';
    }
}