const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContents = Array.from(document.querySelectorAll('.tab__content'));

const activateTab = (index) => {
    tabs[index].classList.add('tab_active');
    tabContents[index].classList.add('tab__content_active')
}

const deactivateTabs = (index) => {
    tabs.forEach(tab => tab.classList.remove('tab_active'));
    tabContents.forEach(tabContent => tabContent.classList.remove('tab__content_active'));
}

tabs.forEach( tab => {
    tab.onclick = () => {
        if (!tab.classList.contains('tab_active')) {
            deactivateTabs();
            const index = tabs.indexOf(tab);
            activateTab(index);
        }
    }
})