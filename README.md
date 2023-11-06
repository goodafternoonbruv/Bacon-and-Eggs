# Bacon-and-Eggs
Find Your Match! Rizzle & Sizzle SIZZLE or FLIP

README: Setting Up XAMPP on Windows for Local PHP Development
Table of Contents
Introduction
Prerequisites
Downloading XAMPP
Installing XAMPP
Starting XAMPP
Configuring Apache and PHP
Testing Your PHP Setup
Creating and Accessing Web Projects
Stopping and Exiting XAMPP
1. Introduction
XAMPP is a free and open-source web server package that allows you to set up a local web development environment on your Windows PC. This README will guide you through the process of installing and configuring XAMPP for PHP development.

2. Prerequisites
Before you begin, make sure you have the following prerequisites in place:

A Windows PC.
Administrative privileges on your computer.
3. Downloading XAMPP
Visit the official XAMPP website at https://www.apachefriends.org/index.html.
Download the latest version of XAMPP for Windows. Choose the version with PHP included (usually the default).
4. Installing XAMPP
Run the downloaded XAMPP installer (e.g., xampp-win32-x.x.x-x-installer.exe).
Follow the installation wizard's instructions:
Choose a directory to install XAMPP (the default is C:\xampp).
Select the components you want to install (e.g., Apache, MySQL, PHP, phpMyAdmin). For PHP development, you need at least Apache and PHP.
Complete the installation process.
5. Starting XAMPP
After installation, open the XAMPP Control Panel from the Start menu or by running xampp-control.exe from the XAMPP installation directory (C:\xampp by default).
Start the Apache and MySQL modules by clicking the "Start" button next to each.
The modules' status indicators should turn green, indicating they are running.
6. Configuring Apache and PHP
Open a text editor as an administrator.

Navigate to the Apache configuration directory by opening the file httpd.conf located in C:\xampp\apache\conf\.

Find and modify the following lines to enable PHP in your Apache configuration:

LoadModule php_module "C:/xampp/php/php<version>/php<version>.dll"
AddType application/x-httpd-php .php
PHPIniDir "C:/xampp/php"
Replace <version> with the actual version number, e.g., php8.0.

Save the changes and close the text editor.

7. Testing Your PHP Setup
Create a new file named info.php in the htdocs directory, located at C:\xampp\htdocs.

Add the following code to info.php:

<?php
phpinfo();
Open a web browser and enter http://localhost/info.php in the address bar. You should see the PHP information page, confirming that PHP is working.

8. Creating and Accessing Web Projects
Create a new folder inside the htdocs directory for each of your web projects. For example, C:\xampp\htdocs\my_project.
Place your project files and PHP scripts inside the project folder.
Access your projects through your browser using http://localhost/project_folder_name.
9. Stopping and Exiting XAMPP
To stop XAMPP, return to the XAMPP Control Panel and click "Stop" for the Apache and MySQL modules.
You can exit the Control Panel or minimize it to the system tray.
Congratulations! You have successfully set up XAMPP on your Windows PC for local PHP development. You can now create and test PHP web applications on your localhost.
