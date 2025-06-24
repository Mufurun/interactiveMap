@echo off
setlocal enabledelayedexpansion

REM Set file paths
set "target_file=src\data.js"
set "snippet_file=template.txt"
set "tmp_file=tmp_data.js"

REM Initialize counter
set /a counter=1

echo ###   PROGRAM LOG   ###
echo:
echo:

for /f "usebackq delims=" %%A in ("%snippet_file%") do (
    set "line=%%A"
    call set "line=%%line%%"

    REM Look for a single quote (') not preceded by a backslash (\)
    echo !line! | findstr /r /c:": '[^\\\']*'[^\\\']*'," >nul
    if !errorlevel! neq 1 (
        echo _______________________________________________________________
        echo Ignore above. Those are because special characters ^(i.e. '^&', '^|'^) is in the line
        echo:
        echo:
        echo There is an error in line !counter! of template.txt.
        echo Please escape single quotes with a backslash like: '\'
        echo This message will close in 30 seconds.
        timeout /t 30 >nul
        exit /b 1
    )
    set /a counter+=1
)
echo _______________________________________________________________
echo Ignore above. Those are because special characters ^(i.e. '^&', '^|'^) are in the line

echo:
echo:
echo Valid input in the templatte.txt
echo:
echo:
echo _______________________________________________________________

REM Markers (adjust if needed)
set "start_marker=####################################*/"
set "end_marker=/*###################################"

REM Start clean
set "in_block=0"


REM Create a new file
    for /f "usebackq delims=" %%A in ("%target_file%") do (
        set "line=%%A"
        setlocal enabledelayedexpansion
        echo !line! | findstr /C:"%start_marker%" >nul
        if !errorlevel! equ 1 (
            if !in_block! equ 0 (
                echo !line! >> "%tmp_file%"
                endlocal
            )
            if !in_block! equ 1 (
                echo !line! | findstr /C:"%start_marker%" >nul
                if !errorlevel! neq 1 (
                    echo !line! >> "%tmp_file%"
                    set "in_block=0"
                    endlocal
                )
            )
            
        )
        if !errorlevel! neq 1 (
            setlocal enabledelayedexpansion
            echo !line! >> "%tmp_file%"
            set "in_block=1"
            REM Insert the new content
            for /f "usebackq delims=" %%B in ("%snippet_file%") do (
                echo %%B >> "%tmp_file%"
            )
            endlocal
        )
    )


move /y "%tmp_file%" "%target_file%" >nul

echo _______________________________________________________________
echo Ignore above. Those are because special characters ^(i.e. '^&', '^|'^) are in the line
echo:
echo:
echo Anyway, Replacement complete!
echo This message will close in 30 seconds.
timeout /t 30 >nul
exit /b 1
