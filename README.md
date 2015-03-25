# Pascal Syntax Highlighting
#### Extension for [Brackets](http://brackets.io) editor

This extension introduces Pascal syntax highlighting to the editor.  The syntax is grabbed from Code Mirror using the Language Manager built into Brackets.

## Results
```pascal
program SampleProgram;
var
    sampleVariable : Integer;

begin
    for sampleVariable := 1 to 10 do
    begin
        Writeln(sampleVariable);
    end;
end.
```

## Installation
Search for the extension in the Extension Manager using the keywords Pascal and syntax.  Installation is achieved by clicking the install button in the Extension Manager.  All files with a .pas extension will now open with Pascal syntax highlighting.

## Other Considerations
You may wish to use a non-standard extension with this syntax highlighting.  You can still select the syntax from the bottom-right hand corner of the Brackets window to select the syntax yourself.  It will show up in the list as "Pascal."

Copyright (c) 2015 Dylan Aspden
