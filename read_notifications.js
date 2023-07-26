update_notifications_number();//this makes the notification number appear in the beginning as 7

function mark_as_read(notification_element) { 
    //this function takes the username html element (or a previous html element to the dot) of a notification as a parameter and adds read notification style to the correct notification, then updates the number of unread notifications through the specific function
    event.preventDefault(); //this prevents the 'a' html elements from refreshing the page

    let notification = notification_element.parentElement.parentElement;

    let notification_dot;
    let next_element = notification_element.nextElementSibling;
    while (next_element) {
        if (next_element.classList.contains("js-notification-dot")) { //this checks if we found the dot notification html element
            notification_dot = next_element;
            break
        }

        next_element = next_element.nextElementSibling;
    }

    notification_dot.classList.add("notification-dot-read"); //this hides the notification dot
    notification.classList.add("notification-read"); //this removes the background color
    update_notifications_number();
}

function mark_all_as_read() {
    //this function just takes all the html elements with the class js-notification-dot and adds the class notification-dot-read, then update the unread notification counter with the specific function
    let notifications_dots = document.querySelectorAll(".js-notification-dot");
    let notifications = document.querySelectorAll(".js-notification");

    for (let i = 0; i < notifications_dots.length; i++) { //deletes notification dot
        notifications_dots[i].classList.add("notification-dot-read");
    }
    for (let i = 0; i < notifications.length; i++) { //deletes background color
        notifications[i].classList.add("notification-read");
    }

    update_notifications_number();
}

function update_notifications_number() { 
    //updates the html element of the unread notification counter, subtracting the total amount of possible notification with the notifications that have a notification-dot-read class
    const TOTAL_NOTIFICATIONS = 7;
    let read_notifications = document.querySelectorAll(".notification-dot-read");

    let unread_notifications_number = TOTAL_NOTIFICATIONS - read_notifications.length;

    document.querySelector(".js-notifications-number").textContent = unread_notifications_number;
}