@echo off
echo Removing all unified places integration files and documentation...
echo.

REM Remove service file
if exist "services\unifiedPlaces.services.js" (
    del "services\unifiedPlaces.services.js"
    echo Deleted: services\unifiedPlaces.services.js
)

REM Remove test file
if exist "test-unified-places.js" (
    del "test-unified-places.js"
    echo Deleted: test-unified-places.js
)

REM Remove my documentation
if exist "COMPLETE_VS_INCOMPLETE.md" (
    del "COMPLETE_VS_INCOMPLETE.md"
    echo Deleted: COMPLETE_VS_INCOMPLETE.md
)

if exist "QUICK_GUIDE_PRIORITY.md" (
    del "QUICK_GUIDE_PRIORITY.md"
    echo Deleted: QUICK_GUIDE_PRIORITY.md
)

if exist "QUICK_REFERENCE.md" (
    del "QUICK_REFERENCE.md"
    echo Deleted: QUICK_REFERENCE.md
)

if exist "SCHEMA_FIX.md" (
    del "SCHEMA_FIX.md"
    echo Deleted: SCHEMA_FIX.md
)

REM Remove previous session documentation
if exist "API_ERROR_FIXES.md" (
    del "API_ERROR_FIXES.md"
    echo Deleted: API_ERROR_FIXES.md
)

if exist "BEFORE_AFTER_COMPARISON.md" (
    del "BEFORE_AFTER_COMPARISON.md"
    echo Deleted: BEFORE_AFTER_COMPARISON.md
)

if exist "ENHANCEMENT_SUMMARY.md" (
    del "ENHANCEMENT_SUMMARY.md"
    echo Deleted: ENHANCEMENT_SUMMARY.md
)

if exist "FILTER_CHANGES.md" (
    del "FILTER_CHANGES.md"
    echo Deleted: FILTER_CHANGES.md
)

if exist "FIXES_SUMMARY.md" (
    del "FIXES_SUMMARY.md"
    echo Deleted: FIXES_SUMMARY.md
)

if exist "TROUBLESHOOTING.md" (
    del "TROUBLESHOOTING.md"
    echo Deleted: TROUBLESHOOTING.md
)

if exist "UNIFIED_PLACES_INTEGRATION.md" (
    del "UNIFIED_PLACES_INTEGRATION.md"
    echo Deleted: UNIFIED_PLACES_INTEGRATION.md
)

if exist "QUICK_START.md" (
    del "QUICK_START.md"
    echo Deleted: QUICK_START.md
)

if exist "REVERT_SUMMARY.md" (
    del "REVERT_SUMMARY.md"
    echo Deleted: REVERT_SUMMARY.md
)

echo.
echo All unified places integration files have been removed!
echo Your backend is now restored to the original state.
echo.
pause
