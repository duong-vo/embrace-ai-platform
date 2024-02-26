
// GLOBALS
var globalMap = {};

// DOCUMENT READY
fetchTSV()

function fetchTSV() {
    $.ajax({
      url: 'https://embraceai.co/assets/poorMansDatabase5.tsv',
      method: 'GET',
      type: 'text',
    }).then(function (data) {
      data = data.split("\n");
      renderResources(parseObj(data));
    }).catch(function (data) {
      console.log('failed', data);
    });
}

function parseObj(str) {
    const propertyNames = ["type", "itemNum", "title", "source", "link", "embed", "imgLink", "tag", "description"];
    const result = {};
    console.log(str);
    str.forEach((string) => {
      const elements = string.split("\t");
      const item = {};
      elements.forEach((element, index) => { item[propertyNames[index]] = element;});
      result[item.itemNum] = item;
    });
    globalMap = result;
    return result;
}

function search() {
    $("#putHere").empty();
    $(".resourcesHere").empty();
    renderResources(globalMap);
}

function renderResources(obj) {
    for (let element in obj) if (doIDisplay(obj[element])) pushCard(obj[element]);
}

function doIDisplay(obj) {
    if (obj.itemNum === undefined) return false;
    let logic = false;
    for (let element in obj) logic = logic || obj[element].toLowerCase().includes($("#searchBar").val().toLowerCase());
    return logic || advancedRec(obj);
}

function pushCard(obj) {
    const { type, itemNum, title, source, link, embed, imgLink, tag, description } = obj;
    if (!$("."+type).length) {
        const inum = "item-" + itemNum.split("-")[1];
        $("#putHere").append(`<a class="nav-link ${type}" href="#${inum}">${type.charAt(0).toUpperCase() + type.slice(1)}s</a>`);
        $(".resourcesHere").append(`<br id="${inum}">`);
    }
    $("#putHere").append(`<a class="nav-link ms-3 my-1 ${type}" href="#${itemNum}">${title}</a>`);
    const defaultCard =
    `
        <br>
        <div class="card rcard h-100 ${tag.replace(" ", "")}" id="${itemNum}">
        ${imgLink == "no"? ``: `<img src="${imgLink}" class="card-img-top" alt=""></img>`}
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${source}</h6>
            <p class="card-text">${description}</p>
            <a href="${link}" class="card-link">Go to Resource</a>
        </div>
        </div>
        <br>
    `;
    const videoCard =
    `
        <br>
        <div class="card rcard h-100 ${tag.replace(" ", "")}" id="${itemNum}">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${source}</h6>
        </div>
            ${embed == "no"? ``: embed}
        <div class="card-body">
            <p class="card-text">${description}</p>
            <a href="${link}" class="card-link">Go to Resource</a>
        </div>
        </div>
        <br>
    `;
    if (["article", "report", "Book", "course"].includes(type)) $(".resourcesHere").append(defaultCard);
    else if (type == "video") $(".resourcesHere").append(videoCard);
}

function advancedRec(obj) {
    let points = 0;
    let search = $("#searchBar").val().toLowerCase().split(" ");
    for (let element in obj) for (let each in search) points += obj[element].toLowerCase().includes(each) ? each.length : 0;
    return points/$("#searchBar").val().length > 0.7;
}

function collapseNav() {
    
}