# Task-List

This web project is an application to help organize user tasks. It is possible to add activities to be done and also remove those that have already been completed.

## Features

- Add tasks to the list

- Remove tasks by clicking on them

- Persistent storage using localStorage

- User-friendly interface

## Technologies Used

- JavaScript (Vanilla) - Logic handling

- HTML - Page structure

- CSS - Styling

- LocalStorage - Data persistence

## How It Works

1. User inputs a task in the text box and clicks the "Add" button.

2. Task is added to the list and displayed immediately.

3. Clicking on a task removes it from the list.

4. Tasks are saved in localStorage, so they persist after refreshing the page.

## Instalation

1. Clone the repository: git clone https://github.com/hugo-camargo/Task-List.git

2. Open index.html in a browser.

## Code Overview

- The JavaScript file includes the following core functions:

- renderTasks(): Renders the tasks from localStorage.

- removeTask(task): Removes a task when clicked.

- storageData(): Saves the current task list to localStorage.

- removeSpans(): Clears warning messages.

## Usage

1. Enter a task in the input field.

2. Click the Add Task button.

3. Click a task to remove it from the list.
