/*
    Name: Juan Jimenez-Mora
    Date: 09.18.2026
    CSC 372-01

    This JavaScript adds interactive Save Event functionality
    to the Gifted University Campus Event Guide.
*/

document.addEventListener("DOMContentLoaded", function () {

    const eventCards = document.querySelectorAll(".event-card");
    const upcomingEvents = document.querySelector("#upcoming-events");

    const savedEventsSection = document.createElement("section");
    savedEventsSection.id = "saved-events";

    const savedEventsHeading = document.createElement("h2");
    savedEventsHeading.textContent = "Saved Events";

    const savedEventsMessage = document.createElement("p");
    savedEventsMessage.id = "saved-events-message";
    savedEventsMessage.textContent = "No events have been saved yet.";

    const savedEventsList = document.createElement("ul");
    savedEventsList.id = "saved-events-list";

    savedEventsSection.appendChild(savedEventsHeading);
    savedEventsSection.appendChild(savedEventsMessage);
    savedEventsSection.appendChild(savedEventsList);

    upcomingEvents.parentNode.appendChild(savedEventsSection);


    eventCards.forEach(function (card) {

        const saveButton = document.createElement("button");

        saveButton.type = "button";
        saveButton.textContent = "Save Event";
        saveButton.classList.add("save-event-button");

        card.appendChild(saveButton);

        saveButton.addEventListener("click", function () {

            const eventName = card.querySelector("h3").textContent;
            const eventTime = card.querySelector("time").textContent;
            const locationText = card.querySelector("p:last-of-type").textContent;

            if (saveButton.textContent === "Save Event") {

                card.classList.add("saved-event");
                saveButton.textContent = "Remove Event";

                addSavedEvent(eventName, eventTime, locationText);

            } else {

                card.classList.remove("saved-event");
                saveButton.textContent = "Save Event";

                removeSavedEvent(eventName);
            }

            updateSavedEventsMessage();
        });
    });


    function addSavedEvent(eventName, eventTime, locationText) {

        const savedEvent = document.createElement("li");

        savedEvent.classList.add("saved-event-item");
        savedEvent.dataset.eventName = eventName;

        const name = document.createElement("strong");
        name.textContent = eventName;

        const details = document.createElement("span");
        details.textContent = eventTime + " | " + locationText;

        savedEvent.appendChild(name);
        savedEvent.appendChild(details);

        savedEventsList.appendChild(savedEvent);
    }


    function removeSavedEvent(eventName) {

        const savedEvents = savedEventsList.querySelectorAll(".saved-event-item");

        savedEvents.forEach(function (savedEvent) {

            if (savedEvent.dataset.eventName === eventName) {
                savedEvent.remove();
            }
        });
    }


    function updateSavedEventsMessage() {

        if (savedEventsList.children.length === 0) {
            savedEventsMessage.classList.remove("hidden");
        } else {
            savedEventsMessage.classList.add("hidden");
        }
    }

});