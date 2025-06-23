@echo off
setlocal enabledelayedexpansion

REM Restore data.js from Git
git restore .\src\data.js

REM Initialize counter
set /a counter=1

REM Set the placeholder
set "placeholder=//Replace This Line (and Delete)"
set "target_file=src\data.js"
set "snippet_file=template.txt"
set "tmp_file=tmp_data.js"

REM Read template.txt line-by-line to validate content
for /f "usebackq delims=" %%A in ("template.txt") do (
    set "line=%%A"
    echo !line! | powershell -Command "$line = Get-Content -Raw -; if ($line -match '.+:\s''[^\\'']+''[^\\'']+''.*') { Write-Output 'ERROR' }" | findstr /C:"ERROR" >nul
    if !errorlevel! equ 0 (
        echo There is an error in line !counter! of template.txt.
        echo Please escape single quotes with a backslash like: \'
        echo This message will close in 30 seconds.
        timeout /t 30 >nul
        exit /b 1
    )
    set /a counter+=1
)

REM Replace placeholder in target_file with contents of snippet_file
(
    for /f "usebackq delims=" %%A in ("%target_file%") do (
        set "line=%%A"
        call set "line=%%line%%"
        if "!line!"=="%placeholder%" (
            for /f "usebackq delims=" %%B in ("%snippet_file%") do (
                echo %%B
            )
        ) else (
            echo(!line!
        )
    )
) > "%tmp_file%"

REM Move temporary file back to original
move /y "%tmp_file%" "%target_file%" >nul

echo ✅ Replacement complete!
pause