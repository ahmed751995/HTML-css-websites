var tab_1= document.getElementById("tab-1")
var tab_2 = document.getElementById("tab-2")
var tab_3 = document.getElementById("tab-3")
tab_1.addEventListener('click', act);
tab_2.addEventListener('click', act);
tab_3.addEventListener('click', act);


var tab1= document.getElementById("tab-1-content");
var tab2 = document.getElementById("tab-2-content");
var tab3 = document.getElementById("tab-3-content");

function act(event) {
    if(event.target.id == "tab-1" || event.target.parentElement.id == "tab-1") {
	tab1.style.display = 'grid';
	tab2.style.display = 'none';
	tab3.style.display = 'none';
	tab_1.classList.add("open-tab");
	tab_2.classList.remove("open-tab");
	tab_3.classList.remove("open-tab");
    }
    else if(event.target.id == "tab-2" || event.target.parentElement.id == "tab-2") {
    	tab1.style.display = 'none';
    	tab2.style.display = 'grid';
    	tab3.style.display = 'none';
	tab_2.classList.add("open-tab");
	tab_1.classList.remove("open-tab");
	tab_3.classList.remove("open-tab");
    }
    else if(event.target.id == "tab-3" || event.target.parentElement.id == "tab-3") {
    	tab1.style.display = 'none';
    	tab2.style.display = 'none';
    	tab3.style.display = 'block';
	tab_3.classList.add("open-tab");
	tab_1.classList.remove("open-tab");
	tab_2.classList.remove("open-tab");
    }
}
