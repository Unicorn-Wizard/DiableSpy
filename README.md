<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Unicorn-Wizard/DiableSpy">
  </a>

<h2 align="center">DiableSpy</h2>



</div>

<!-- TABLE OF CONTENTS -->

## Table of Content

1. [About DiableSpy](#about-DiableSpy)
   - [Features](#features)
   - [Support](#support)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation on Linux](#getting-started)
   - [Installation on Android](#getting-started)
   - [Uninstall](#uninstall)
3. [Usage](#usage)
   - [Options](#options)
   - [Examples](#examples)
4. [Run in Gitpod](#run-with-gitpod)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About DiableSpy


DiableSpy is a powerful and user-friendly OSINT (Open-Source Intelligence) tool that allows you to quickly and easily gather information about a specific target. With DiableSpy, you can easily search for information about websites, IP addresses, usernames, and more, all from the convenience of a simple command-line interface.  
  
One of the key features of DiableSpy is its ability to work as a global package, allowing you to use it from any directory on your computer.It also has ability to automatically save the results of your searches to a text file. This means that you can easily access and refer to the information you have gathered at a later time.  
  
DiableSpy is easy to install and use, making it an ideal tool for anyone looking to gather information quickly and efficiently. 

### Features

1.  InstaGram Recon
2.  Subdomain Scanner
3.  Ports Scan
4.  User Recon
5.  Mail finder
6.  URL Scanner
7.  Exif metadata
8.  Whois Lookup
9.  IP Lookup
10. Header Info
11. Website Age
12. DNS Lookup
13. UserAgent Lookup
14. Git Recon
15. URL Expander
16. Youtube Lookup
17. Instagram DP Viwer
18. Save Results to file

### Support

| Linux | Termux | Windows |
| :---: | :----: | :-----: |
|   ✔   |   ✔    |    ✔    |

✔ Tested  
❔ - Not tested

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

You need **NodeJs** 12 or later to run this tool.  
To install Node.js, follow the instructions for your operating system:

- Linux
  ```bash
  sudo apt-get install nodejs
  ```
  > On many distros NodeJs is installed by default. 

- Termux
  ```bash
  pkg install nodejs-lts 
  ```

- Windows
  - Download the latest LTS version from [NodeJs](https://nodejs.org/en/download/).
  - Run the installer.
  - Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
  - Restart your computer. You won't be able to run Node.js until you restart your computer.

### Installation on [Linux](https://wikipedia.org/wiki/Linux)


```sh
sudo npm install diablespy -g -s
```

### Installation on [Termux](https://github.com/termux/termux-app#f-droid)

```sh
 npm install -g -s diablespy
```

### Uninstall
To uninstall DiableSpy from your system, run the following command:

```sh
npm remove diablespy -g
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

After installing the tool, you can run it by typing `diablespy` in your terminal.

```sh
diablespy [options] [value]
```

### Options:

| Short Form | Long Form       | Description                                                                                            |
| :--------- | :-------------- | :----------------------------------------------------------------------------------------------------- |
| -r         | --userrecon     | Search for a username across multiple social media platforms to gather information on a specific user. |
| -m         | --mailfinder    | Search for an email address associated with a specific username or domain.                             |
| -u         | --useragent     | Quickly and easily identify the browser and device type.                                               |
| -w         | --whoislookup   | Find registration information for a specific domain.                                                   |
| -i         | --instaRecon    | Gather information on an Instagram user, such as their posts, followers, and more.                     |
| -p         | --iplookup      | Find information on a specific IP address, such as its location and hostname.                          |
| -t         | --portscan      | Search for open ports.                                                                                 |
| -d         | --domainage     | Find out how long a website has been registered and active on the internet.                            |
| -e         | --headerinfo    | View and analyze the HTTP headers of a website.                                                        |
| -n         | --dnslookup     | View DNS records for a specific domain and see how it is configured.                                   |
| -g         | --gitrecon      | Gather information on a GitHub user, such as their repositories, contributions, and more.              |
| -s         | --subdomain     | Find and enumerate the subdomains of a given website.                                                  |
| -x         | --exif          | Extract Exif metadata from images, such as camera make and model, date and time, and more.             |
| -a         | --webscan       | Analyze the suspicious URLs.                                                                           |
| -l         | --urlexpand     | Expand shortened URLs and see the full destination of a link.                                          |
| -y         | --youtubelookup | View the metadata of a YouTube video, such as the title, description, and tags.                        |


### Examples

- To Update Tool:
  ```sh
  npm update -g diablespy
  ```
- To get list of all the basic options use -h :
  ```sh
  diablespy -h
  ```
- To Get Instagram User Info:
  ```sh
  diablespy -i instagram
  ```
- To Get Domain's Whois Information:
  ```sh
  diablespy -w google.com
  ```
- To Get Subdomains of website:
  ```sh
  diablespy -s google.com
  ```
- To Get IP Information:
  ```sh
  diablespy -p 8.8.8.8
  ```
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ScreenShots -->

<h2> Screenshots</h2>
 
<br>

<img src="images/DiableSpy1" width="40%"> <img src="/images/DiableSpy2" width="40%">
<img src="/images/DiableSpy3" width="40%" >
<img src="/images/DiableSpy4" width="40%" >

<img src="/images/DiableSpy5" width="80%" >

<p align="right">(<a href="#top">back to top</a>)</p>
<hr>

<!-- CONTRIBUTING -->

<p align="right">(<a href="#top">back to top</a>)</p>

## Big Thanks
Thank you so much to devsprite and infooze!  
  

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->


