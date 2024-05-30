// content.js

    console.log("Content script loaded and running!");

    try {
        const sidebar = document.querySelector('.sidebar');
        const fullList = document.querySelector('.full-list');

        if (sidebar) {
            sidebar.style.width = '550px';
            console.log("Sidebar width set to 550px");
        } else {
            console.warn("Sidebar element not found");
        }

        if (fullList) {
            fullList.style.width = '550px';
            console.log("Full list width set to 550px");
        } else {
            console.warn("Full list element not found");
        }

        console.log("Script executed successfully!");
    } catch (error) {
        console.error("Error executing script:", error);
    }
