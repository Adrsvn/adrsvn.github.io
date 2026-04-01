(function ($) {
const STORAGE_KEY = "adrsvn-theme";

const ROLES = [
    "building production-ready web apps",
    "Crafting clean, responsive user interfaces",
    "Fullstack Developer",
];

const SKILLS = [
    {
        name: "SQL Server",
        type: "Database",
        icon: "fa-solid fa-database",
        href: "https://www.microsoft.com/en-us/sql-server",
    },
    {
        name: "Laravel",
        type: "Framework",
        icon: "fa-brands fa-laravel",
        href: "https://laravel.com/",
    },
    {
        name: "PHP",
        type: "Language",
        image: "assets/media/php-logo.png",
        href: "https://www.php.net/",
    },
    {
        name: "Bootstrap",
        type: "Framework",
        image: "assets/media/bootstrap-logo-fix.png",
        href: "https://getbootstrap.com/",
    },
    {
        name: "Tailwind CSS",
        type: "Utility CSS",
        image: "assets/media/tailwind-logo-fix.png",
        href: "https://tailwindcss.com/",
    },
    {
        name: "C#",
        type: "Language",
        icon: "fa-solid fa-code",
        href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    {
        name: "jQuery",
        type: "Library",
        image: "assets/media/jquery-logo.png",
        href: "https://jquery.com/",
    },
    {
        name: "MySQL",
        type: "Database",
        image: "assets/media/mysql-logo-fix.png",
        href: "https://www.mysql.com/",
    },
    {
        name: "ASP.NET",
        type: "Framework",
        icon: "fa-solid fa-server",
        href: "https://dotnet.microsoft.com/en-us/apps/aspnet",
    },
];

const FEATURED_PROJECTS = [
    {
        title: "Klinik Puri Medika Website",
        description:
            "A Laravel-based clinic company profile website with services, doctor schedules, facilities, promos, articles, news, and an online reservation flow built to support both branding and lead capture.",
        tags: [
            "Laravel 12",
            "Blade",
            "Tailwind CSS",
            "jQuery",
            "SEO",
            "Google Analytics",
        ],
        highlights: [
            "Responsive frontend built with Laravel Blade, Tailwind CSS, and project-ready UI components.",
            "SEO foundation with article metadata, canonical tags, robots directives, and sitemap support.",
            "Online reservation flow connected to the database with email notifications for follow-up.",
        ],
        image: "assets/media/ssklinikcompro.png",
        link: null,
        cta: "Preview Soon",
        note: "Included SEO-ready public pages, reservation lead capture, email notifications, and a preview-password gate before public release. Public preview will be added later.",
        accent: "#0f766e",
    },
    {
        title: "CMS Klinik Puri Medika",
        description:
            "An internal Laravel CMS for managing hero banners, promos, services, service packages, doctors, specializations, articles, reservations, and CMS users with role-based access and smoother HTMX-powered navigation.",
        tags: [
            "Laravel 12",
            "HTMX",
            "Quill",
            "Select2",
            "Google OAuth",
            "Turnstile",
        ],
        highlights: [
            "Google OAuth login with internal user validation, so only approved CMS users can access it.",
            "Credential login protected with Cloudflare Turnstile and role-based access for Admin or Editor.",
            "Tailwind Plus-based admin UI with HTMX-powered navigation for a smoother CMS workflow.",
        ],
        image: "assets/media/ssklinikcms.png",
        link: null,
        cta: "Preview Soon",
        note: "Included Google OAuth login with internal user validation, Turnstile-protected credential login, and Admin or Editor role-based access. Public preview will be added later.",
        accent: "#2563eb",
    },
];

const EARLIER_PROJECTS = [
    {
        title: "Todo List with Authentication",
        description:
            "An interactive Todo List with Google, Email, Facebook, and Phone Number authentication. The tasks connect to Firebase Realtime Database and this build was created to learn more about Firebase auth and data flow.",
        tags: [
            "React",
            "Firebase Database",
            "Firebase Auth",
            "HTML",
            "CSS",
            "Tailwind",
        ],
        image: "assets/media/td2giff.gif",
        link: "https://www.youtube.com/watch?v=_whtowx7Y68",
        cta: "Preview",
        accent: "#64748b",
    },
    {
        title: "StartUp Landing Page",
        description:
            "An interactive responsive landing page called StartUp. It explains the brand, services, pricing, and contact information in a single scrolling experience created with React.",
        tags: ["React", "HTML", "CSS", "Tailwind"],
        image: "assets/media/StartUpPreview.png",
        link: "https://www.youtube.com/watch?v=CC1C_E9_U_U",
        cta: "Preview",
        accent: "#2f6df6",
    },
    {
        title: "Rest API Article",
        description:
            "A Laravel REST API backend with CRUD operations, validation for creating and editing articles, and endpoints for detail, limited lists, and full article retrieval tested with Postman.",
        tags: ["Laravel", "REST API"],
        image: "assets/media/postmanpreview.png",
        link: null,
        cta: "Coming Soon",
        accent: "#fb923c",
    },
    {
        title: "Admin Dashboard Posts",
        description:
            "An admin page created using the CoreUI dashboard. It adds a dedicated Posts area with submenus for all posts, add new, preview, and edit post flows.",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "28.11.2022"],
        image: "assets/media/coreUI.png",
        link: null,
        cta: "Coming Soon",
        accent: "#94a3b8",
    },
    {
        title: "Ledoyen",
        description:
            "A responsive restaurant website where visitors can explore the brand, see featured cuisine, browse events, and book tables with email notifications for both the customer and admin.",
        tags: ["HTML", "CSS", "PHP", "Bootstrap", "JavaScript"],
        image: "assets/media/ledoyenpreview.png",
        link: "https://youtu.be/37AHNnXgyiQ",
        cta: "See Preview",
        accent: "#f97316",
    },
    {
        title: "Rekreasi",
        description:
            "A responsive travel landing page that highlights destinations, estimated costs, and summaries. The original build also included login and register flows connected to a backend for future reviews.",
        tags: ["HTML", "CSS", "PHP", "Tailwind", "jQuery"],
        image: "assets/media/rekreasipreview.png",
        link: "https://youtu.be/E3eXU53NFEE",
        cta: "See Preview",
        accent: "#38bdf8",
    },
    {
        title: "Bareng Bareng",
        description:
            "A marketplace with buyer, seller, and admin roles. Sellers can run interest checks before products move into group buy status, while the backend handles requests, role flow, and withdrawals.",
        tags: ["HTML", "CSS", "Laravel", "Tailwind", "jQuery"],
        image: "assets/media/barengpreview.png",
        link: "https://youtu.be/RYjCuR-2iZ4",
        cta: "See Preview",
        accent: "#2563eb",
    },
    {
        title: "Ovo.id Remake",
        description:
            "A responsive landing page remake inspired by Ovo.id. The goal was recreating the visual style from scratch while keeping small interactive touches intact.",
        tags: ["HTML", "CSS", "Tailwind", "jQuery"],
        image: "assets/media/ovoremakepreview.png",
        link: "https://youtu.be/hMYHM_6zr5M",
        cta: "See Preview",
        accent: "#a855f7",
    },
    {
        title: "Adrsvn (Old)",
        description:
            "The previous version of my personal website, where visitors could explore my profile, the stacks I use, and selected projects I had worked on.",
        tags: ["HTML", "CSS", "jQuery", "Portfolio", "Old Version"],
        imageLight: "assets/media/adrsvnpreview.png",
        imageDark: "assets/media/adrsvndarkpreview.png",
        link: "https://youtu.be/n2HAJDuwQgE",
        cta: "See Preview",
        accent: "#16c7a7",
    },
    {
        title: "FoodCiper",
        description:
            "A recipe website that lets users search for meals and get ingredients plus cooking steps. The data is fetched from the Spoonacular API.",
        tags: ["HTML", "CSS", "React"],
        image: "assets/media/foodciperpreview.png",
        link: "https://youtu.be/YjsvUoTjdHc",
        cta: "See Preview",
        accent: "#2563eb",
    },
    {
        title: "StyleUp",
        description:
            "A responsive landing page for an automotive styling brand. The site introduces the company, its services, and a showcase of car wrap or modification projects.",
        tags: ["HTML", "CSS", "Tailwind", "jQuery"],
        image: "assets/media/itashapreview.png",
        link: "https://youtu.be/uyDaOOK6WIA",
        cta: "See Preview",
        accent: "#ef4444",
    },
    {
        title: "Internship Project: Digital Asset",
        description:
            "A responsive internal admin page for BINUS University. It was used to upload files, manage templates, and share materials. During the internship, the team also created BeeOffice and Apps.",
        tags: ["HTML", "CSS", "Bootstrap", "jQuery", "SQL Server"],
        image: "assets/media/DAreview.png",
        note: "The internship builds below were created during a 1 year placement at BINUS University.",
        link: "https://drive.google.com/drive/folders/1wVDca3M_aMylGgaRyaMytzHEAtgbmoQp?usp=share_link",
        cta: "See Preview",
        accent: "#2563eb",
    },
    {
        title: "Portfolio Landing Page",
        description:
            "A responsive landing page built to explore single page transitions inside a full-stack website. The original version also included comments connected to a backend.",
        tags: ["HTML", "CSS", "Tailwind", "jQuery", "PHP"],
        image: "assets/media/lp2preview.png",
        link: "https://youtu.be/tAYf7Pq_qAE",
        cta: "See Preview",
        accent: "#2563eb",
    },
    {
        title: "Plant Shop",
        description:
            "A clean landing page focused on featured plants, supporting descriptions, and pricing. The goal was a polished storefront experience with a soft visual style.",
        tags: ["HTML", "CSS", "Tailwind"],
        image: "assets/media/plantshoppreview.png",
        link: "https://youtu.be/qOKQv8R5_Ss",
        cta: "See Preview",
        accent: "#22c55e",
    },
    {
        title: "Catpure",
        description:
            "A responsive landing page concept that introduces the Catpure brand and what it offers. The project was used to practice React-based page composition.",
        tags: ["HTML", "CSS", "Tailwind", "React"],
        image: "assets/media/catpurepreview.png",
        link: null,
        cta: "Coming Soon",
        accent: "#22c55e",
    },
    {
        title: "Apple M1 Remake",
        description:
            "A responsive landing page inspired by an Apple M1 product presentation. The build focused on layout recreation and interactive scrolling sections.",
        tags: ["HTML", "CSS", "Tailwind", "JavaScript"],
        image: "assets/media/applepreview.png",
        link: "https://youtu.be/cYLYC-p1EIw",
        cta: "See Preview",
        accent: "#64748b",
    },
    {
        title: "To do List",
        description:
            "An interactive To do List app with validation and alerts based on user actions. This project was created specifically to learn React fundamentals more deeply.",
        tags: ["HTML", "CSS", "Tailwind", "React"],
        image: "assets/media/todoapp.png",
        link: "https://youtu.be/CGsBc4MzQ2Q",
        cta: "See Preview",
        accent: "#2563eb",
    },
];

function getSavedTheme() {
    return localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
}

function getProjectImage(project, theme) {
    if (theme === "dark" && project.imageDark) {
        return project.imageDark;
    }

    if (theme === "light" && project.imageLight) {
        return project.imageLight;
    }

    return project.image || project.imageLight || project.imageDark;
}

function renderSkills() {
    const markup = $.map(SKILLS, (skill) => {
        const media = skill.image
            ? `<img src="${skill.image}" alt="${skill.name} logo" loading="lazy" />`
            : `<i class="${skill.icon}" aria-hidden="true"></i>`;

        return `
            <a class="skill-card" href="${skill.href}" target="_blank" rel="noreferrer">
                <div class="skill-card__media">
                    ${media}
                </div>
                <div class="skill-card__content">
                    <small>${skill.type}</small>
                    <strong>${skill.name}</strong>
                </div>
            </a>
        `;
    }).join("");

    $("#skills-grid").html(markup);
}

function renderProjectCards(projects, theme) {
    return $.map(projects, (project) => {
        const tags = $.map(project.tags, (tag) => `<span class="tag">${tag}</span>`)
            .join("");

        const highlights = project.highlights
            ? `
                <div class="project-card__highlights">
                    <p class="project-card__highlights-label">Highlights</p>
                    <ul class="project-card__highlights-list">
                        ${$.map(project.highlights, (item) => `<li>${item}</li>`)
                            .join("")}
                    </ul>
                </div>
            `
            : "";

        const note = project.note
            ? `<div class="project-card__note">${project.note}</div>`
            : "";

        const linkTarget = project.external === false
            ? ""
            : ' target="_blank" rel="noreferrer"';

        const action = project.link
            ? `<a class="button button--small button--ghost" href="${project.link}"${linkTarget}>${project.cta}</a>`
            : `<span class="button button--small button--ghost button--disabled">${project.cta}</span>`;

        return `
            <article class="project-card" style="--card-accent: ${project.accent};">
                <div class="project-card__media">
                    <img src="${getProjectImage(project, theme)}" alt="${project.title} preview" loading="lazy" />
                </div>
                <div class="project-card__body">
                    <div class="tag-list">${tags}</div>
                    <h3 class="project-card__title">${project.title}</h3>
                    <p class="project-card__copy">${project.description}</p>
                    ${highlights}
                    ${note}
                    <div class="project-card__actions">
                        ${action}
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

function renderProjects(theme) {
    $("#featured-projects-grid").html(
        renderProjectCards(FEATURED_PROJECTS, theme)
    );
    $("#archive-projects-grid").html(
        renderProjectCards(EARLIER_PROJECTS, theme)
    );
}

function applyTheme(theme) {
    const nextTheme = theme === "dark" ? "dark" : "light";
    $("html").attr("data-theme", nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);

    $(".theme-toggle").attr("aria-pressed", String(nextTheme === "dark"));
    $(".theme-toggle__icon i").attr(
        "class",
        nextTheme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon"
    );
    $(".theme-toggle__text").text(
        nextTheme === "dark" ? "Light mode" : "Dark mode"
    );

    renderProjects(nextTheme);
}

function closeMenu() {
    $("body").removeClass("menu-open");
    $(".mobile-toggle").attr("aria-expanded", "false");
}

function updateActiveLinks() {
    let currentSection = "home";
    const scrollPosition = $(window).scrollTop() + 180;

    $.each($("section[id]"), function onEachSection() {
        if ($(this).offset().top <= scrollPosition) {
            currentSection = this.id;
        }
    });

    $(".site-nav__link, .mobile-nav__link").removeClass("is-active");
    $(`a[href="#${currentSection}"]`).addClass("is-active");
}

function startRoleRotation() {
    let roleIndex = 0;

    window.setInterval(() => {
        roleIndex = (roleIndex + 1) % ROLES.length;
        $("#typed-role").fadeOut(150, function onFadeOut() {
            $(this).text(ROLES[roleIndex]).fadeIn(180);
        });
    }, 2600);
}

$(function onReady() {
    renderSkills();
    applyTheme(getSavedTheme());
    startRoleRotation();
    updateActiveLinks();

    $("#current-year").text(new Date().getFullYear());

    $(".theme-toggle").on("click", () => {
        const currentTheme = $("html").attr("data-theme");
        applyTheme(currentTheme === "dark" ? "light" : "dark");
    });

    $(".mobile-toggle").on("click", function onToggleClick() {
        const isOpen = $("body").toggleClass("menu-open").hasClass("menu-open");
        $(this).attr("aria-expanded", String(isOpen));
    });

    $(".mobile-scrim, .mobile-nav__link").on("click", closeMenu);
    $('.site-nav__link[href^="#"], .mobile-nav__link[href^="#"]').on(
        "click",
        updateActiveLinks
    );

    $(window).on("scroll", updateActiveLinks);
    $(window).on("resize", () => {
        if ($(window).width() > 720) {
            closeMenu();
        }
        updateActiveLinks();
    });
});
})(jQuery);
