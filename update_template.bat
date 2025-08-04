@echo off
setlocal enabledelayedexpansion

REM Set file paths
set "target_file=src\data.js"
set "snippet_file=template\template.txt"
set "tmp_file=tmp_data.js"

REM Initialize counter
set /a counter=1

echo ###   PROGRAM LOG   ###
echo:
echo:
echo:
echo:
echo _______________________________________________________________


for /f "usebackq delims=" %%A in ("%snippet_file%") do (
    set "line=%%A"
    call set "line=%%line%%"

    
    REM Look for a single quote (') not preceded by a backslash (\)
    set "line=!line:&=^&!"
    set "line=!line:|=^|!"
    set "line=!line:>=^>!"
    set "line=!line:<=^<!"
    set "line=!line:^^=^!"
    
    echo(!line! | findstr /r /c:": '[^\\\']*'[^\\\']*'," >nul
    if !errorlevel! neq 1 (
        REM _______________________________________________________________
        REM Ignore above. Those are because special characters ^(i.e. '^&', '^|'^) is in the line
        REM _______________________________________________________________

        echo:
        echo:
        echo There is an error in line !counter! of template.txt.
        echo Please escape single quotes with a backslash like: '\'
        echo This message will close in 30 seconds.
        timeout 30
        exit /b 1
    )
    
    set /a counter+=1
)
REM _______________________________________________________________
REM Ignore above. Those are because special characters ^(i.e. '^&', '^|'^) are in the line
REM _______________________________________________________________

echo:
echo:
echo Valid input in the template.txt
echo:
echo:
echo _______________________________________________________________

REM Markers (adjust if needed)
set "start_marker=*************************************/ "
set "end_marker=/************************************ "

REM Start clean
set "in_block=0"

del "%tmp_file%"


REM Create a new file
    for /f "usebackq delims=" %%A in ("%target_file%") do (
        set "line=%%A"
    
        @REM if !errorlevel! neq 1 (
        if "!line!"=="%start_marker%" (
            echo(*************************************/ >> "%tmp_file%"
            REM Insert the new content
            for /f "usebackq delims=" %%B in ("%snippet_file%") do (
                @REM if not %%B=="" (
                    echo %%B >> "%tmp_file%"
                @REM ) else (
                @REM     echo. >> "%tmp_file%"
                @REM )    
            )
            
            set "in_block=1"
        ) else (
        @REM if !errorlevel! equ 1 (            
            if !in_block! neq 1 (
                @REM if not !line!=="" (
                    echo(!line! >> "%tmp_file%"
                @REM ) else (
                @REM     echo. >> "%tmp_file%"
                @REM )                    
            )
            if !in_block! equ 1 (
                @REM echo !line! | findstr /C:"%end_marker%" >nul
                @REM if !errorlevel! neq 1 (
                if "!line!"=="%end_marker%" (
                    echo:
                    echo This may take a while. Let's have a coffee break:^)
                    echo:
                    @REM if not !line!=="" (
                        echo(/************************************ >> "%tmp_file%"
                    @REM ) else (
                    @REM     echo. >> "%tmp_file%"
                    @REM )    
                    set "in_block=2"
                )
            )            
        )
        
    )

move /y "%tmp_file%" "%target_file%" >nul

endlocal
REM _______________________________________________________________
REM Ignore above. Those are because special characters ^(i.e. '^&', '^|'^) are in the line
REM _______________________________________________________________

echo:
echo:
echo Anyway, Replacement complete!

echo:
echo:
setlocal enabledelayedexpansion

set "main_file=var\all_markers.txt"
set "publish_file=var\publish.txt"
set "index_file=index.html"

set /p bool=A Question: would you like map with all markers ^(y^) or just some to be piblished ^(n^)


if /i "%bool%"=="Y" (
    copy /y "%main_file%" "%index_file%" 
)
if /i "%bool%"=="N" (
    copy /y "%publish_file%" "%index_file%" 
)


echo This message will close in 30 seconds.
timeout 30 
exit
