class User {
    /**
     * Instaciate the new user
     * @param {string} phone the user's phone number
     * @param {string} mail the user's email account
     * 
     */
    constructor(phone, mail) {
        //Init variables for the user
        let phoneNum = phone; //User's phone number
        let email = mail; //User's email address
        let streak = 0; //Number of days in a row the user completed all goals
        let tasks = []; //An array of task objects representing the tasks the user has indicated they want to complete
        let day = 0; //The current day TODO: Make this not shit (ie. max val, get date from computer etc)
    }

    /**
     * Retrieve the user's phone number from the program
     * @param {user} this 
     * @returns the user's phone number
     */
    getPhone(this) {
        return this.phoneNum;
    }

    /**
     * Set a new phone number for the user
     * @param {User} this The current user
     * @param {*} newPhone The new phone number the user wants to set their phone number to
     * @returns Null
     */
    setPhone(this, newPhone) {
        this.phone = newPhone;
        return;
    }

    /**
     * 
     * @param {User} this The current user
     * @returns the user's email
     */
    getEmail(this) {
        return this.email;
    }

    /**
     * Sets a new email for the user
     * @param {User} this The user whose email we're changing
     * @param {*} newEmail The email they want to change their email to
     * @returns Null
     */
    setEmail(this, newEmail) {
        this.email = newEmail;
        return;
    }

    /**
     * Adds a new task to the users daily list of gaols
     * @param {User} this User getting the new task
     * @param {Task} newTask The new task
     * @returns none
     */
    addTask(this, newTask) {
        this.tasks.push(newTask);

        return;
    }

    //Unsure if this function works (before considering bugs). May need to do a proper search by task name
    //It depends on how poggers my made up javascript is
    /**
     * Remove a task
     * @param {User} this user whose task we're removing
     * @param {Task} badTask task we want to remove
     * @returns none
     */
    removeTask(this, badTask) {
        tasks.splice(tasks.indexOf(badTask), 1);
        return;
    }

    /**
     * Sets the user's new day, resets tasks that need to be reset and changes the streak value accordingly
     * @param {User} this the user who has a new day
     * @returns none
     */
    newDay(this) {

        let allComplete = true;

        //Checking if we increment the streak
        while (allComplete == true && i < this.tasks.length) {
            if (this.tasks[i].complete != true) {
                allComplete = false;
            }
        }

        if (allComplete == True) {
            this.streak++;
        } else {
            this.streak = 0;
        }

        //New day time
        this.day++;
        //Go through all active tasks
        for (let curTask of this.tasks) {
            //If the tasks needs to be done today, add it to the todo list
            if (day % curTask.frequency == 0) {
                curTask.taskIncomplete();
            }
        }

        return;
    }
}