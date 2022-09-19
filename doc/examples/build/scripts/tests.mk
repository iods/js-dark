# Using bash shell w/ pipefail option allows you to have the return status
# of a piped command as the value of the last rightmost command to exit with
# a non-zero. This lets pipeoutupt tee but still exist w/ fails.

SHELL := /bin/bash
.SHELLFLAGS