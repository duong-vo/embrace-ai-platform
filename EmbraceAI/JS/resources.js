
// GLOBALS
var globalMap = {};

// DOCUMENT READY
fetchTSV()

function fetchTSV() {
    $.ajax({
      url: 'https://embraceai.co/assets/poorMansDatabase7.tsv',
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
        $("#putHere").append(`
        <a class="sidenavlink btn-primary nav-link ${type}" data-bs-toggle="collapse" role="button" 
        aria-expanded="false" href="#${type}" onclick="expCheck("${inum}")"id="colLink${inum}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" id="svg${inum}">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
        </svg>
        ${type === "opensource" ? "Open Source": 
        type.charAt(0).toUpperCase() + type.slice(1) + "s"}</a>`);
        $("#putHere").append($("#putHere").length > 1 ? 
        `</div><div id="${type} class="collapse">` : `<div id="${type}" class="collapse">`);
        $(".resourcesHere").append(`<br id="${inum}">`);
    }
    $(`#${type}`).append(`<a class="nav-link ms-3 my-1 ${type}" href="#${itemNum}">${title}</a>`);
    const defaultCard =
    `
        <br>
        <div class="card rcard h-100 ${tag.replace(" ", "")}" id="${itemNum}">
        ${imgLink == "no"? ``: `<img src="${imgLink}" class="${type==="Book" ? "img-fluid rounded-start" : "card-img-top"}" alt="Cover image"></img>`}
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${source}</h6>
            <p class="card-text">${description}</p>
            <a href="${link}" class="card-link">Go to Resource</a>
        </div>
        </div>
        <br>
    `;
    const bookCard = `
    <div class="card rcard h-100 ${tag.replace(" ", "")}" id="${itemNum}">
        <div class="row g-0">
            <div class="col-md-4">
            ${imgLink == "no"? ``: `<img src="${imgLink}" class="${type==="Book" ? "img-fluid rounded-start" : "card-img-top"}" alt="Cover image"></img>`}
            </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${source}</h6>
                        <p class="card-text">${description}</p>
                        <a href="${link}" class="card-link">Go to Resource</a>
                    </div>
                </div>
            </div>
        </div>
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
    if (["article", "report", "course", "opensource"].includes(type)) $(".resourcesHere").append(defaultCard);
    else if (type == "video") $(".resourcesHere").append(videoCard);
    else if (type == "Book") $(".resourcesHere").append(bookCard);
}

function advancedRec(obj) {
    let points = 0;
    let search = $("#searchBar").val().toLowerCase().split(" ");
    for (let element in obj) for (let each in search) points += obj[element].toLowerCase().includes(each) ? each.length : 0;
    return points/$("#searchBar").val().length > 0.6;
}

function expCheck(inum) {
    const newPath = $("#colLink"+inum).attr('aria-expanded') === 'true' ?
        `<path fill-rule="evenodd" d="M3.646 11.854a.5.5 0 0 0 .708 0L8 8.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708M2.4 5.2c0 .22.18.4.4.4h10.4a.4.4 0 0 0 0-.8H2.8a.4.4 0 0 0-.4.4"/>`
        : `<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>`;
    $("#svg" + inum).empty();
    $("#svg" + inum).append(newPath);
    
}
  