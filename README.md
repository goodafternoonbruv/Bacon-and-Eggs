# Bacon-and-Eggs

![GitHub Logo](goodafternoonbruv/Bacon-and-Eggs/edit/main/icon/Bacon-anf-Eggs-Logo.png)

Find Your Match!
Rizzle & Sizzle
SIZZLE or FLIP

# README: Setting Up XAMPP on Windows for Local PHP Development

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Downloading XAMPP](#downloading-xampp)
4. [Installing XAMPP](#installing-xampp)
5. [Starting XAMPP](#starting-xampp)
6. [Configuring Apache and PHP](#configuring-apache-and-php)
7. [Testing Your PHP Setup](#testing-your-php-setup)
8. [Creating and Accessing Web Projects](#creating-and-accessing-web-projects)
9. [Stopping and Exiting XAMPP](#stopping-and-exiting-xampp)

## 1. Introduction
XAMPP is a free and open-source web server package that allows you to set up a local web development environment on your Windows PC. This README will guide you through the process of installing and configuring XAMPP for PHP development.

## 2. Prerequisites
Before you begin, make sure you have the following prerequisites in place:
- A Windows PC.
- Administrative privileges on your computer.

## 3. Downloading XAMPP
1. Visit the official XAMPP website at [https://www.apachefriends.org/index.html](https://www.apachefriends.org/index.html).
2. Download the latest version of XAMPP for Windows. Choose the version with PHP included (usually the default).

## 4. Installing XAMPP
1. Run the downloaded XAMPP installer (e.g., `xampp-win32-x.x.x-x-installer.exe`).
2. Follow the installation wizard's instructions:
   - Choose a directory to install XAMPP (the default is `C:\xampp`).
   - Select the components you want to install (e.g., Apache, MySQL, PHP, phpMyAdmin). For PHP development, you need at least Apache and PHP.
   - Complete the installation process.

## 5. Starting XAMPP
1. After installation, open the XAMPP Control Panel from the Start menu or by running `xampp-control.exe` from the XAMPP installation directory (`C:\xampp` by default).
2. Start the Apache and MySQL modules by clicking the "Start" button next to each.
3. The modules' status indicators should turn green, indicating they are running.

## 6. Configuring Apache and PHP
1. Open a text editor as an administrator.
2. Navigate to the Apache configuration directory by opening the file `httpd.conf` located in `C:\xampp\apache\conf\`.
3. Find and modify the following lines to enable PHP in your Apache configuration:

   ```apache
   LoadModule php_module "C:/xampp/php/php<version>/php<version>.dll"
   AddType application/x-httpd-php .php
   PHPIniDir "C:/xampp/php"
   ```

   Replace `<version>` with the actual version number, e.g., `php8.0`.

4. Save the changes and close the text editor.

## 7. Testing Your PHP Setup
1. Create a new file named `info.php` in the `htdocs` directory, located at `C:\xampp\htdocs`.
2. Add the following code to `info.php`:

   ```php
   <?php
   phpinfo();
   ```

3. Open a web browser and enter `http://localhost/info.php` in the address bar. You should see the PHP information page, confirming that PHP is working.

## 8. Creating and Accessing Web Projects
1. Create a new folder inside the `htdocs` directory for each of your web projects. For example, `C:\xampp\htdocs\my_project`.
2. Place your project files and PHP scripts inside the project folder.
3. Access your projects through your browser using `http://localhost/project_folder_name`.

## 9. Stopping and Exiting XAMPP
1. To stop XAMPP, return to the XAMPP Control Panel and click "Stop" for the Apache and MySQL modules.
2. You can exit the Control Panel or minimize it to the system tray.

Congratulations! You have successfully set up XAMPP on your Windows PC for local PHP development. You can now create and test PHP web applications on your localhost.
Place your project files and PHP scripts inside the project folder.
Access your projects through your browser using http://localhost/project_folder_name.
9. Stopping and Exiting XAMPP
To stop XAMPP, return to the XAMPP Control Panel and click "Stop" for the Apache and MySQL modules.
You can exit the Control Panel or minimize it to the system tray.
Congratulations! You have successfully set up XAMPP on your Windows PC for local PHP development. You can now create and test PHP web applications on your localhost.
