class Task {
    /**
     * Instantiates a new task
     * @param {String} name The user's name
     * @param {int} freq How many days between completing the task again. Ex. 2 is every other day
     * @param {int} prior How important is this, higher priority appears higher on list. Just a way to sort to do list
     */
    constructor(name, freq, prior) {
        //Init variable for the task
        let name = name;
        let frequency = freq;
        let basePriority = prior;
        let curPriority = basePriority;
        let complete = false;
    }

    /**
     * Gets the name of the task
     * @param {Task} this current task
     * @returns 
     */
    getName(this) {
        return this.name;
    }

    /**
     * Give the task a new name
     * @param {Task} this Current task to be renamed
     * @param {String} newName the new name we're giving the task
     * @returns none
     */
    setName(this, newName) {
        this.name = newName;
        return;
    }

    /**
     * Returns the frequency of a given task
     * @param {Task} this the task whose frequency we're interested in
     * @returns the frequency of the task
     */
    getFrequency(this) {
        return this.frequency;
    }

    /**
     * Changes the frequency of a given task
     * @param {Task} this the task whose frequency we wish to change
     * @param {*} newFreq the new frequency for the given task
     * @returns None
     */
    setFrequency(this, newFreq) {
        this.frequency = newFreq;
        return;
    }

    /**
     * Returns the importance of a given task
     * @param {Task} this the task at whose priority we're interested in
     * @returns the task's priority
     */
    getBasePriority(this) {
        return this.basePriority;
    }

    /**
     * Changes the priority of a given task
     * @param {Task} this The task whose priority is being changed
     * @param {int} newPriority The new priority of the task to replace the old priority
     * @returns None
     */
    setPriority(this, newPriority) {
        this.basePriority = newPriority;
        return;
    }

    /**
     * Runs when a user completes a task they had listed for the day
     * @param {Task} this 
     */
    taskComplete(this) {
        //Set priority to zero so it falls to the bottom of the list, completion to true to help with streaks
        this.curPriority = 0;
        this.complete = true;

        return;
    }

    /**
     * At the beginning of new days, set task to incomplete so that it can be done again
     * @param {Task} this the task to reset
     */
    taskIncomplete(this) {
        this.curPriority = this.basePriority;
        this.complete = false;
    }
}