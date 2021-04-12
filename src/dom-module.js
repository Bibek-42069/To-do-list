const _changeElementText = (element_indetifier, new_string) => {
    let element = document.querySelector(element_indetifier);
    element.textContent = new_string;
}

const _changeHeaderText = (element_indetifier, new_string) => {
    let element = document.querySelector(element_indetifier)
    let header = element.querySelector('h2');
    header.textContent = new_string;
}

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible

const methodForCollapsibleText = (parent) => {
    let content = parent.nextElementSibling
    
    content.style.maxHeight ? content.style.maxHeight = null : content.style.maxHeight = content.scrollHeight + "px"
}

const switchListBeingShown = (element_indetifier,selected_list) => {
    _changeHeaderText(element_indetifier,selected_list)

}


export {switchListBeingShown, methodForCollapsibleText}