<link rel="stylesheet" href="../styles.css">

# 🟪 Foundations Course

## 📜 Table of Contents 📜

- [🧠 1 Prerequisites](#🧠-1-prerequisites)
  * [🟦 1.1 How Does the Web Woek](#🟦-11-how-does-the-web-work)
  * [🟦 1.2 Installation Overview](#🟦-12-installation-overview)
  * [🟦 1.3 Installations](#🟦-13-installations)
  * [🟦 1.4 Command Line Basics](#🟦-14-command-line-basics)
      + [👨‍💻 Assignment - Unix Shell Course 👨‍💻](#👨‍💻-assignment---unix-shell-course-👨‍💻)
  * [🟦 1.5 Setting up Git](#🟦-15-setting-up-git)
- [🧠 2 Git Basics](#---2-git-basics)
  * [🟦 2.1 Introduction to Git](#---21-introduction-to-git)
  * [🟦 2.2 Git Basics](#---22-git-basics)
    + [👨‍💻 Assignment - Git Basics 👨‍💻](#------222-assignment---git-basics--demo-------)

<hr>

# 🧠 1 Prerequisites

## 🟦 1.1 How Does the Web Work

### 🔴 Introduction

* This section will provide a hollistic overview of how the web works.

### 🔴 Lesson Overview

* Describe what the internet is

* Describe what packets are and how they are used to transfer data

* Understand the differences between a web page, web server, web browser and search engine.

* Explain what a client and server is

* Explain what IP addresses and DNS servers are,

### 🔴 How Does the Internet Work?  

* The internet is a large netwrok of computers which can communicate together.

* A network between two computers can be achieved through an ethernet cable. 

* If we wanted ten computers to communicate with each other, it would not be efficient for them to all have ethernet cables going to all other computers. To solve this issue, we let the computers connect to a `router` which ensures messages are sent to the correct recieptant.

![](2023-06-03-11-25-21.png)


### 🔴 Difference between Webpage, Website, Web server and Search Engine?

* `Web page` - a document which can be displayed in a browser

* `Website` - A collection of web pages

* `Web server` - the host of a website

* `Search Engine` - A web service which lets you find other web pages

### 🔴 How the Web interacts

* Computers connected to the internet are called `clients` and `servers`

* We also have:

1) `Your internet connection` - allows you to send and receive data on the web

2) `TCP/IP` - The Transmission Control Protocol and Internet Protocol are communication protocols are protocols which define how data is transmitted over the internet.

3) `DNS` - The Domain Name System allows the browser to find the websites IP address. This is needed for before a HTTP message is sent. The DNS is a mapping from the IP address (e.g. `63.245.215.20`) to the URL of the website

4) `HTTP` - this is a protocol which defines a language for clients and servers to speak to each other.

5) `Component files` - these are the front-end files and assets which makeup a website

<br>

## 🟦 1.2 Installation Overview

### 🔴 Introduction

* We will look at setting up the development environment!

* The Odin Project does not support Windows natively, so we shall look at:

- installing a supported OS
- Installing Chrome and code editor
- Creating SSH key

<br>

## 🟦 1.3 Installations

* I abandon th Linux installation and decide to just install Linux for Windows

* I open up powershell and execute:

```
PS C:\Users\shiv_> wsl --install
The requested operation requires elevation.
Installing: Virtual Machine Platform
Virtual Machine Platform has been installed.
Installing: Windows Subsystem for Linux
Windows Subsystem for Linux has been installed.
Installing: Ubuntu
Ubuntu has been installed.
The requested operation is successful. Changes will not be effective until the system is rebooted.
PS C:\Users\shiv_>
```

* I reboot my computer, and set the username and password!

* Already have VSCode installed and will use it as my code editor

<br>

## 🟦 1.4 Command Line Basics

### 🔴 Lesson Overview

* Describe what the commannd line is and open the command line on your computer

* Use the command line to navigate directories and display directory contents

* Use the command line to create a new directory and a new file

* Use the command line rename or destroy a directory and a file

* Use the command line to open a file or folder in a program

### 📜 Assignment - Unix Shell Course (Instructions) 📜

1) Visit [The Unix Shell course](https://swcarpentry.github.io/shell-novice/) designed by the Software Carpentry Foundation. There you will find a full complement of lessons on using the CLI, but for now just focus on completing the following lessons:

  - Setup 
  - Introducing the Shell
  - Navigating Files and Directories
  - Working With Files and Directories
  - Pipes and Filters


### 👨‍💻 Assignment - Unix Shell Course 👨‍💻

* I work through the exercises. Here are my notes

- We can list files recursively using `-R` option

- The `-F` option adds additional information to the files to indicate if they are directory, link, executable etc

```sh
$ ls -F
LittleWomen.txt*  haiku.txt*  thesis/
```

- The `mv` command lets you specify a file and move it to a new location. E.g. here I move the `quotes.txt` in the `thesis` directory into current directory:

```sh
$ ls
LittleWomen.txt  haiku.txt  thesis
$ ls thesis/
draft.txt
$ mv thesis/draft.txt .
$ ls
LittleWomen.txt  draft.txt  haiku.txt  thesis
```

- The `mv` command also lets you rename

- The `cp` command lets you copy a file. E.g. I copy haiku.txt to /thesis

```sh
cp haiku.txt thesis/
$ ls haiku.txt thesis/haiku.txt
haiku.txt  thesis/haiku.txt
```

- We can copy a directory recursively (including files and subdirectories) using the `-r` option:

```sh
$ cp -r thesis/ thesis_backup
$ ls thesis_backup/
haiku.txt
```

- We can remove files using `rm` command:

```sh
$ rm haiku.txt
```

- We can use `rm` safely by using the `-i` option, which will require the user to confirm

```sh
$ rm -i haiku.txt
rm: remove regular empty file 'haiku.txt'? y
```

- In order to delete a directory and contents, we MUST use the recursive option `-r`:

```sh
$ ls thesis
haiku.txt
$ rm thesis
rm: cannot remove 'thesis': Is a directory
$ rm -r thesis
$ ls thesis
ls: cannot access 'thesis': No such file or directory
```

- We can copy multiple files to a directory GIVEN the final argument is a directory:

```sh
$ ls
alkanes  animal-counts  creatures  numbers.txt  project  writing
$ mkdir
 backup
$ cp creatures/minotaur.dat creatures/unicorn.dat backup/
$ ls backup/
minotaur.dat  unicorn.dat
```

- `*` is a wildcard for 0+ characters, `?` is a wildcard for 1 character exactly

- The `wc` command prints out number of lines words and characters in files:

```sh
$ pwd
/mnt/c/Users/shiv_/Documents/GitHub/TheOdinProject/0 Foundations Course/shell-lesson-data/exercise-data/alkanes
$ ls
cubane.pdb  ethane.pdb  methane.pdb  octane.pdb  pentane.pdb  propane.pdb
$ wc cubane.pdb
  20  156 1158 cubane.pdb
```

* We use `-l` option to just display the number of lines>:

```sh
$ wc -l *.pdb
  20 cubane.pdb
  12 ethane.pdb
   9 methane.pdb
  30 octane.pdb
  21 pentane.pdb
  15 propane.pdb
 107 total
```

- Which file contains the fewest lines? We can redirect the result of the `wc` command using `>`:

```sh
$ wc -l *.pdb > length.txt
$ ls
cubane.pdb  ethane.pdb  length.txt  methane.pdb  octane.pdb  pentane.pdb  propane.pdb
```

- We sort the results of the length.txt file using `sort -n` where `-n` sorts numerically:

```sh
$ sort length.txt -n
   9 methane.pdb
  12 ethane.pdb
  15 propane.pdb
  20 cubane.pdb
  21 pentane.pdb
  30 octane.pdb
 107 total
 ```

 * I use the `head` command to get the top n lines of the file:

```sh
$ sort length.txt -n > sorted-lengths.txt
$ head -n 1 sorted-lengths.txt
   9 methane.pdb
```

- We use `echo` to create text and output to a file:

```sh
$ echo this is the start of my sentence
this is the start of my sentence
$ echo hello > testFile.txt
$ echo line2 >> testFile.txt
$ head -n 2 testFile.txt
hello
line2
```

- We can use `|` pipe to pass output of one command to another:

```sh
$ sort -n length.txt
   9 methane.pdb
  12 ethane.pdb
  15 propane.pdb
  20 cubane.pdb
  21 pentane.pdb
  30 octane.pdb
 107 total
$ sort -n length.txt | head -n 1
   9 methane.pdb
```

* We can pipe consecutively:

```sh
$ wc -l *.pdb
  20 cubane.pdb
  12 ethane.pdb
   9 methane.pdb
  30 octane.pdb
  21 pentane.pdb
  15 propane.pdb
 107 total
$ wc -l *.pdb | sort -n
   9 methane.pdb
  12 ethane.pdb
  15 propane.pdb
  20 cubane.pdb
  21 pentane.pdb
  30 octane.pdb
 107 total
$ wc -l *.pdb | sort -n | head -n 1
   9 methane.pdb
```

<br>

## 🟦 1.5 Setting up Git

### 🔴 Configure Git and GitHub

#### 🟡 Setup Git

* I setup git within linux:

```sh
$ git config --global user.name "shivkumar98"
$ git config --global user.email "shiv_kumar.98@outlook.com"
```

#### 🟡 Create an SSH Key

* SSH key is a secure identifier - like a long password used to identify your machine. GitHub uses SSH key to upload tgo Github without having to use password everytime!

* I check if Ed25519 algorithm SSH key is already installed and it is not

* I create the SSH key:

```sh
$ ssh-keygen -t ed25519 -C shiv_kumar.98@outlook.com
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/shiv/.ssh/id_ed25519):
Created directory '/home/shiv/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/shiv/.ssh/id_ed25519
Your public key has been saved in /home/shiv/.ssh/id_ed25519.pub
```

* I go to my Github account, and navigate to `SSH and GPG keys` and create a new key:

![](screen2023-06-06-20-04-39.png)

* I display the SSH key using:

```sh
cat ~/.ssh/id_ed25519.pub
```

* I copy this and paste it in the Key section, and click `Add Key`

#### 🟡 Testing Your Key

* I follow [this article]() and test the following command, and successfully connect!:

```sh
$ ssh -T git@github.com
The authenticity of host 'github.com (140.82.121.4)' can't be established.
ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'github.com' (ED25519) to the list of known hosts.
Hi shivkumar98! You've successfully authenticated, but GitHub does not provide shell access.
```

<hr>

# 🧠 2 Git Basics

## 🟦 2.1 Introduction to Git

### 🔴 Introduction

* Git allows you to record differences in files/folders AND keeps a historical record of each save.

* Git != Github. GitHub is a remote storage facility, Git also allows you to push projects to other platforms like GitLab, Bitbucket.

## 🟦 2.2 Git Basics

### 📜 2.2.1 Assignment - Git Basics (Instructions) 📜

#### 🟡 Create the Repository 

1) Create a repository named `git_test` on GitHub  and check the `Add a README file` option.
2) Copy the link for the repository and clone the repo.
3) Create a directory called `repos` and clone the repository.
4) Check your connected using `git remote -v`

#### 🟡 Use the Git Workflow 

1) Create a new file called `hello_world.txt` in git_test folder
2) Use `git status` to see the staging of the file
3) Type `git add hello_world.txt` and check git status again
4) Type `git commit -m "added hello_world.txt` and check git status again
5) Type `git log` and see the output

#### 🟡 Modify a File or Two

1) Open the README of the repo
2) Add "Hello Odin!" to line 3 and save the file
3) Type `git status`
4) Add README to staging (`git add`)
5) Look at status
6) Open `hello_world.txt`, add text and save. Use `git add .` to add all files to staging area. Check the status again
7) Add a commit message "Edit README.md and hello_world.txt" and check git status
8) Look at git log

#### 🟡 Push Your Work to GitHub

1) Type `git push origin main`
2) Check status

<hr>

### 👨‍💻 2.2.2 Assignment - Git Basics (Demo) 👨‍💻

* I create the repository:

![](screenshots/2023-06-06-20-49-09.png)

* I navigate to [repos](/0%20Foundations%20Course/Assignments/2%20Git%20Basics/repos/) and clone the repo using this link: https://github.com/shivkumar98/git_test.git

```sh
$ pwd
/mnt/c/Users/shiv_/Documents/GitHub/TheOdinProject/0 Foundations Course/Assignments/2 Git Basics/repos
$ git clone https://github.com/shivkumar98/git_test.git
Cloning into 'git_test'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (3/3), done.
```

* I check if I'm connected:

```sh
$ git remote -v
origin  https://github.com/shivkumar98/git_test.git (fetch)
origin  https://github.com/shivkumar98/git_test.git (push)
```

* I create a new file:

```sh
$ touch hello_world.txt
```

![](screenshots/2023-06-06-21-03-48.png)

* I add the file to staging and commit:

```sh
$ git add hello_world.txt
```

![](screenshots/2023-06-06-21-05-23.png)

* I check the log:

![](screenshots/2023-06-06-21-06-05.png)

* I modify the README.md file and save it:

![](screenshots/2023-06-06-21-08-56.png)

* I also add a line to `hello_world.txt` and add all files to staging and commit:

```sh
git add .
$ git commit -m "edited README and hello_world.txt"
```

![](screenshots/2023-06-06-21-12-07.png)

* I try to push but get asked for my username/password. I realised I made a mistake when cloning by using the HTTPS URL.😰

* I correct this problem by setting the remote:

```sh
$ git remote set-url origin git@github.com:shivkumar98/git_test.git
```

* I then CAN push!:

![](screenshots/2023-06-06-21-21-32.png)

* I check the repo on github and can see my changes did come through:

![](screenshots/2023-06-06-21-23-09.png)

<hr>

# 🧠 3 HTML Foundations

## 🟦 3.1 Introduction to HTML and CSS

### 🔴 Introduction

* HTML is the raw data that a website is built out of, all the texts, links, cards, lists and buttons are created in HTML

* CSS adds style to the above elements

<br>


## 🟦 3.2 Elements and Tags

* Elements are pieces of content wrapped in tags `<>`. E.g. `<p>` is an element.

* Some elements require a closing tag after the content - e.g. `<p>content</p>`, others are self closing like `<br/>` and `<img/>`


<br>


## 🟦 3.3 HTML Boilerplate

### 🔴 Creating an HTML File

* I create a HTML file called `index.html` [here](/0%20Foundations%20Course/Examples/1%20HTML%20Boilerplate/index.html).

* We typically name the homepage of our websites as `index.html`

### 🔴 The DOCTYPE

* Every HTML page starts with the doctype declaration - this it to tell the browser which version of HTML should be used for rendering❗

* For HTML5, we use the following declaration:

```html
<!DOCTYPE html>
```

### 🔴 HTML Element

* The ROOT ELEMENT of a HTML file is `<html>`. We can specify the lang attribute as "en" to enable assistive technologies:

```html
<!DOCTYPE>
<html lang="en">
</html>
```

### 🔴 Head Element

* The `<head>` element is where we can add meta-data for our webpage.

* We should always have a meta tag which defines the character set

* The `<title>` element is defined within the head (this is seen in the tab name), if we do not specify then it defaults to filename

```html
<!DOCTYPE>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title>My webpage</title>
   </head>
</html>
```

### 🔴 Body Element

* The `<body>` element is used to contain all the user-displayed data


### 🔴 Viewing HTML Files in Browser

* TOP recommends using Google Chrome! ❗

* We can open a HTML file in linux using:

```sh
google-chrome index.html
```

<br>


## 🟦 3.4 Working with Text

* In this lesson, we shall see common text-based elements

### 🔴 Paragraphs

* Suppose we have the following HTML, how will it render?

```html
<body>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</body>
```

![](screenshots/2023-06-06-22-37-33.png)

* In order for the text to come out in paragraphs, we must use the `<p>` tags:

```html
<body>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua.</p>

<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat.</p>
</body>   
```

### 🔴 Headings

* There are 6 different levels for headings: `<h1>` to `<h6>`

### 🔴 Strong Element

* We use `<strong>` makes text **bold**

### 🔴 Em Element

* The `<em>` element makes text *italic*

### 🔴 Nesting and Indentation

* Elements can be nested within each other. E.g. we can have `<p>` elements within the `<body>` element.

* We use indentation to convey nesting more clearly!

### 🔴 HTML Comments

* Comments are enclosed within `<!--` and `-->`

<br>


## 🟦 3.5 Lists

### 🔴 Unordered Lists

* We create unordered lists using `<ul>`. E.g.:

```html
<ul>
   <li>Item 1</li>
   <li>Item 2</li>
   <li>Item 3</li>
</ul>
```

![](screenshots/2023-06-07-10-58-53.png)

### 🔴 Ordered Lists

* Ordered lists are using `<ol>. E.g.:

```html
<ol>
   <li>Item 1</li>
   <li>Item 2</li>
   <li>Item 3</li>
</ol>
```

![](screenshots/2023-06-07-11-00-31.png)

### 📜 Assignment - Lists (Instructions) 📜

* Create a new HTML document and create the following lists:

1) An unordered shopping list of your favourite foods

2) An ordered list of todo's you need to get done today

3) An unordered list of places you'd like to visit some day

4) An ordered list of you all time top 5 favourite video games

### 👨‍💻 Assignment Solution 👨‍💻

* I work on this assignment [here](/0%20Foundations%20Course/Assignments/2%20Lists/)

* I create a HTML file:

```html
<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="utf-8">
        <title>My lists</title>
    </head>
    <body>
        <h2>Unordered list of favourite foods:</h1>
        <ul>
            <li>Chicken Tikka Masala</li>
            <li>Chowmein</li>
            <li>Kebab</li>
        </ul>
        <h2>Ordered list of todo's</h2>
        <ol>
            <li>Finish HTML Foundations on TOP</li>
            <li>Phone the pharmacy</li>
            <li>Go to the shop</li>
            <li>Prepare dinner</li>
        </ol>
        <h2>Unordered list of places I'd like to visit</h2>
        <ul>
            <li>Paris</li>
            <li>New York</li>
            <li>Canada</li>
        </ul>
        <h2>An ordered list of top 5 video games</h2>
        <ol>
            <li>The Last of Us</li>
            <li>inFamous 2</li>
            <li>Sly Cooper</li>
            <li>Beyond: Two Souls</li>
            <li>Danganronpa</li>
        </ol>
    </body>
</html>
```

![](screenshots/2023-06-07-11-14-11.png)

<br>


## 🟦 3.6 Links and Images

* We shall see how to create links to other pages on your own website, display an image using HTML and understand the difference between absolute and relative links

* I prepare for this section by creating a HTML file [here](/0%20Foundations%20Course/Examples/2%20Links%20and%20Images/odin-links-and-images/index.html)


### 🔴 Anchor Elements

* Anchor `<a>` elements are used for creating clickable links:

```html
<a>Click me</a>
```

* We add `href` attribute to specify the link:

```html
<a href="https://www.theodinproject.com/about">click me</a>
```

![](/0%20Foundations%20Course/screenshots/anchors.gif)

* If href is not specified then the anchor will appear as plain text, otherwise it gets higlighted in blue.


### 🔴 Absolute and Relative Links

* 🎃 Absolute links are used to link to pages on the internet (and not part of your website). E.g. `https://www.theodinproject.com/about` 🎃

* Relative links are used for pages within our own website.

* I create another HTML file in the [odin-links-and-images](/0%20Foundations%20Course/Examples/2%20Links%20and%20Images/odin-links-and-images/) directory - `about.html`

* Within the `index.html` file, I make a link to the `about.html` page:

```html
<a href="about.html">About</a>
```


![](/0%20Foundations%20Course/screenshots/relative-link.gif)

* We can organise our HTML files better, typically the `index.html` is within the root directory and other pages are in a subdirectory.

* I move `about.html` to a new directory [pages](/0%20Foundations%20Course/Examples/2%20Links%20and%20Images/odin-links-and-images/pages/)
 
* ⚠️ The link for the anchor is now broken! ⚠️

* I update the relative link:

```html
<a href="pages/about.html">About</a>
```

### 🔴 Images

* We can display images using a self-closing `<img>` tag. We specify the image's location with the `src` attribute

* I add TOP logo to my `index.html` page:

```html
<img src="https://www.theodinproject.com/mstile-310x310.png">
```

![](screenshots/2023-06-07-12-03-32.png)

* If we want to use an image stored on our website server, then we can use relative links.

* I saw an image in a new directory [images](/0%20Foundations%20Course/Examples/2%20Links%20and%20Images/odin-links-and-images/images/dot.jpg).

* I add a new image element:

```html
<img src="./images/dot.jpg">
```

![](screenshots/2023-06-07-12-07-37.png)

### 🔴 Parent Directories

* Let's suppose we want to add `dot.jpg` to th about page which is in a seperate directory to the `images` directory. We can reference the parent directory using `../`:

```html
<img src="../images/dot.jpg">
```

* The image is displayed as expected

### 🔴 Alt Attribute

* Every image element must also have an `alt` atttibute which describes the image. This will be displayed if the image cannot be loaded. Also helps with screen readers

```html
<img src="https://www.theodinproject.com/mstile-310x310.png"
      alt="The Odin Project Logo">
```


### 🔴 Four Main Image Formats

* There are 4 main image formats used on the web which are designed for different purposes. The 4 main types are:

1) JPG ✅

2) GIF ✅

3) PNG ✅

4) SVG ✅

* JPG is designed for handling large color palletes without increasing file size too much! It does not allow for transparency!

* GIFs are the perfect for simple animations but they are limited for color pallate

* PNG is great for images which do no need realism or animation, they allow for transparency and do not have palette limitations so they are good for icons and logos

* SVG are vector based graphics which means they can scale up and down without loss of quality

<br>


## 🟦 3.7 Project - Recipes

* In this project, I create a basic recipe website which will consist of a main index page which will have links to a new recipes.

* My solution to this project can be found [here](/0%20Foundations%20Course/Projects/1%20Recipes/README.md)

<hr>

# 🧠 4 CSS Foundations

## 🟦 4.1 Introduction to CSS

### 🔴 4.1.1 Introduction

* CSS is used for styling our HTML! We shall look at selectors, property and values from CSS

* In order to target unique elements from the HTML we must use class/id selectors!

* If we create a CSS rule for a class, then these style will apply to the element itself AND ALL child elements

* It's not advised to use CSS to target ids ⚠️

* We can group selectors together by seperating the selections with commas

### 🔴 4.1.2 Scrimba Example

* Suppose we have the following HTML:

```html
<!DOCTYPE html>
<html lang="en">
 <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Recipe Card</title>
    <link rel="stylesheet" href="./index.css" />
 </head>
 <body>
    <div class="container" id="container">
        <div class="recipe-card feature">
            <img
            src="cupcake.jpg"
            alt="Red Velvet Cupcake - Photo by luisana zerpa on Unsplash"
            />
            <div class="recipe-content">
                <h1>Red Velvet Cupcakes</h1>
                <p>This red velvet cupcake recipe yields soft, fluffy cupcakes with a rich chocolate flavor and a vibrant red color. Topped with a creamy and tangy cream cheese frosting, these cupcakes are perfect for any occasion and are sure to impress your guests.</p>
                <section class="recipe-info">
                    <ul>
                        <li class="recipe-prep-time">
                            <h2>Preparation Time</h2>
                            <p>30 min</p>
                        </li>
                        <li>
                            <h2>Total Time</h2>
                            <p>40 min</p>
                        </li>
                        <li>
                            <h2>Yield</h2>
                            <p>40 min</p>
                        </li>
                    </ul>
                </section>
            </div>                            
            <a href="#">View recipe</a>
        </div>
  </div>
 </body>
</html>

```

* How can we target `h2` and `a` only within the `recipe-card` class? We would write the class name before specifying the element like so:

```css
.recipe-card h2,
.recipe-card a {
  text
}
```

* This produces:

![](screenshots/2023-06-10-16-58-13.png)


### 🔴 4.1.3 Selectors

* The 🌎UNIVERSAL🌎 selector is an asterisks which targets ALL elements:

```css
* {
  color: purple;
}
```

* A TYPE selector targets a HTML type:

```css
div {
  color: white
}
```

* A 🏫CLASS🏫 selectors targets all HTML elements with the specified class

```html
<div class="alert-text">Please agree to our terms of service.</div>
```

```css
.alert-text {
  color: red;
}
```

* An 🪪ID🪪 selector should be used very sparingly!

#### ⭐ Grouping Selectors ⭐

* We can GROUP selectors together to avoid duplicating CSS styles:

```css
.read { color: white; background-color: black; }
.unread { color: white; background-color: black; }

/* we can group the above together to: */
.read, .unread {
   color: white;
   background-color: black;
}
```

#### ⭐ Chaining Selectors ⭐

* Suppose we have the following HTML:

```html
<div>
  <div class="section header">Latest Posts</div>
  <p class="section preview">This is a preview</p>
</div>
```

* Supose we only want to target the `subsection` AND `header` class, we can ⛓️CHAIN⛓️ our selectors

```css
.section.header {
  color: red;
}
```

* We can also chain an class and ID:

```html
<div>
  <div class="section header">Latest Posts</div>
  <p class="section" id="preview">This is a preview</p>
</div>
```

```css
.section#preview {
  color: gray;
}
```

#### ⭐ Descendant Combinator ⭐

* Descendant selectors let us specify selectors WITHIN another selector.

```css
.ancestor .child {
  /* this will only target .child classes contained within .ancestor classes */
}
```

 * We can also specify the child of a child, and so on...

#### ⭐ Order Matters ⭐

* If we target to selectors at the same level of specificity, then the last rule will have most precedence.

* Suppose we have the following HTML:

```html
<div>
    <div class="section header">Latest Posts</div>
    <p class="section preview">This is a preview</p>
</div>
```

* and CSS:

```css
  .section {
      background-color: orange;
  }
  .header {
      background-color: blue;
  }
  .section, .header {
      background-color: aqua;
  }
```

* Without the final CSS rule overriding the first and second rules, it would look like:

![](screenshots/2023-06-18-18-31-02.png)

* But if it is included, then both backgrounds are aqua:

![](screenshots/2023-06-18-18-32-01.png)