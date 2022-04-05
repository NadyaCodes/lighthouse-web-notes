# How to Fork and Clone

## In GitHub:

* Find the gist you want to clone
* Click fork button in top right corner
* Copy SSH URL of Gist to clipboard ("Clone via ssh")

## In Terminal:
* go to appropriate directory in terminal
* type: git clone [clipboard thing] [name]
* (name should be same name as what you called the directory in github...don't need brackets for either thing)
* creates a directory called [name] and will download the contents into it


# How to push to Git Hub (new/updates)

## In Terminal:

* git add [filename.filetype]
* git commit -m "Comment about what this is"
* git push


# Create Repository FOR GitHub

## In Terminal:
* mkdir [new-directory-name]
* cd [new-directory-name]
* git init
* make new files, and commit them if you want to do that already

## In GitHub
* create a new repository with same name
* copy SSH URL

## In Terminal:
* git remote add origin [url]
* git push -u origin master

