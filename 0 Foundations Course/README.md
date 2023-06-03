<link rel="stylesheet" href="../../styles.css">

# 🟪 Foundations Course

# 🧠 1 Prerequisites

## 🟦 1.1 How Does the Web Woek

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