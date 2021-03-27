# Makefile - Dark SDK for JavaScript

#
#
# Things to Note:
# 	* First directive is run if no other is specified (in this case tutorial)
#	* If you use the @ sign prior to the command, you can suppress the output
#
# [2] Variables
# [3] Files
# @version 0.1

# [variables]

SHELL   := /bin/bash
PROJECT := dark
VERSION := 0.1.4
ROOT    := $(shell pwd)
SRC     := $(dir $(lastword $(MAKEFILE_LIST)))

tutorial:
	@ # todo: have this run like an interactive tutorial wizard.
	@echo "Please read the Makefile to go through the reasons I made this."
	echo "Please turn off the command output."
	echo $(SRC)


#
# [2] Variables
#

# Example shows losing the variable because Makefiles are parsed with their syntax, then passed to the shell
variable-lost:
	export foo=bar
	echo "foo=[$$bar]"

# Using escape fixes the issue of parsing Makefile first, then passing to shell
variable-keep:
	export foo=bar \
	echo "foo=[$$bar]"


#
# [3] Files
#

# Examples shows creating a dependency. Resulting in an error (file is not in tree)
result.txt: source.txt
	@echo "Building the source.txt from source.txt"
	cp source.txt result.txt

# Shows how to get the source.txt file and updates it if you do
# (remove s)
sources.txt:
	@echo "Building the source.txt"
	echo "this is the source" > source.txt

-include $(SRC).build/scripts/docker.mk