/*==================================================
  EXPERIENCE
==================================================*/

const experienceData = {

    combek: {

        company: "PT. Combek Berkah Sejahtera",

        position: "Web Developer Intern",

        period: "Februari 2026 - Juli 2026",

        description:
            "Mengembangkan website Company Profile One Auto Service, membangun sistem inventory berbasis web, melakukan analisis kebutuhan pengguna, merancang antarmuka menggunakan Figma serta implementasi database MySQL.",

        tech: [
            "HTML",
            "CSS",
            "Bootstrap",
            "PHP",
            "MySQL",
            "Figma"
        ],

        link: "#projects"

    },

    samsung: {

        company: "Samsung Authorized Service Center",

        position: "IT Support Intern",

        period: "2021 - 2022",

        description:
            "Melakukan troubleshooting perangkat, instalasi software, pemeliharaan perangkat, serta membantu operasional pelayanan teknis kepada pelanggan.",

        tech: [
            "Windows",
            "Microsoft Office",
            "Hardware",
            "Troubleshooting"
        ],

        link: "#"

    }

};


/*==================================================
  ELEMENT
==================================================*/

const logos = document.querySelectorAll(".experience-logo");

const card = document.querySelector(".experience-card");

const pointer = document.querySelector(".experience-pointer");

const company = document.getElementById("expCompany");

const position = document.getElementById("expPosition");

const period = document.getElementById("expPeriod");

const description = document.getElementById("expDescription");

const tech = document.getElementById("expTech");

const link = document.getElementById("expLink");


/*==================================================
  INIT
==================================================*/

card.classList.add("show");


/*==================================================
  CHANGE EXPERIENCE
==================================================*/

function changeExperience(key, logo){

    const data = experienceData[key];

    if(!data) return;

    card.classList.remove("show");

    setTimeout(()=>{

        company.textContent = data.company;

        position.textContent = data.position;

        period.textContent = data.period;

        description.textContent = data.description;

        link.href = data.link;

        tech.innerHTML = "";

        data.tech.forEach(item=>{

            const span = document.createElement("span");

            span.textContent = item;

            tech.appendChild(span);

        });

        moveCard(logo);

        card.classList.add("show");

    },180);

}


/*==================================================
  MOVE CARD
==================================================*/

function moveCard(logo){

    const stage = document.querySelector(".experience-stage");

    const logoRect = logo.getBoundingClientRect();

    const stageRect = stage.getBoundingClientRect();

    const left = logoRect.left - stageRect.left + 260;

    card.style.left = left + "px";

    pointer.style.left = "45px";

}


/*==================================================
  EVENT
==================================================*/

logos.forEach((logo)=>{

    logo.addEventListener("click",()=>{

        logos.forEach(item=>{

            item.classList.remove("active");

        });

        logo.classList.add("active");

        changeExperience(

            logo.dataset.company,

            logo

        );

    });

});


/*==================================================
  FIRST LOAD
==================================================*/

moveCard(document.querySelector(".experience-logo.active"));