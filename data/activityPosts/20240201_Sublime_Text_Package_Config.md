**NOTE**: Since this was written, I've started using VS Code more heavily, mainly due to its better LaTeX and markdown editing environment. I still use Sublime Text whenever I need a quick editor that's fast. I've also changed my color theme to "Winter is Coming" by John Papa - Nord is snug but too washed-out at times.

<br>

The main benefit of Sublime Text over VS Code is its speed. Comes at the cost of less features, but you can pretty much work things out.

One thing that helps is Terminus, which lets you use the terminal within the editor. Installing it is easy. You just have to follow the steps in <a href="https://www.geeksforgeeks.org/how-to-use-terminal-in-sublime-text-editor/" target="_blank">this article</a> to install package control, add Terminus, and copy paste some data. Afterwards you can use the terminal without leaving Sublime.


Another thing that helps is a new color scheme. I tend to like wintery themes, so I installed Nord. The colors in Nord are easy to look at and have a certain coherence to the overall effect. Another good one is One Dark Pro if you like vibrant colors.

Adding Nord to Sublime v4 is kind of a hassle. You start by following the directions <a href="https://packagecontrol.io/packages/Nord" target="_blank">here</a>, which is easy enough. Then you can tweak the colors if you want. Use the steps given by elangovan <a href="https://forum.sublimetext.com/t/modify-customize-color-schemes/4467/3" target="_blank">in this forum comment</a> to start editing the Nord.sublime-color-scheme file.
<figure>
    <img style="width:600px" src="/images/activity/20240201_Nord_Theme_2.png">
    <figcaption>From Nord.sublime-color-scheme</figcaption>
</figure>

Two changes I made were making comments 8% brighter (`nord3_bright` to `#76839e`) and making classes 12% brighter (`nord7` to `#a7dbda`). Comment brightness because Nord comments are a little hard to see by design. Class brightness because for code like `ClassName.func()`, it's hard to differentiate between `ClassName` and `func` by their colors. Here's the result:
<figure>
    <img style="width:700px" src="/images/activity/20240201_Nord_Theme_1.png">
    <figcaption>From Nord.sublime-color-scheme</figcaption>
</figure>

This still isn't satisfactory. Keywords like "function," "let," and "const" aren't being highlighted. It was hard to find a solution for this. What you need to do is install the "JavaScriptNext - ES6 Syntax" package, following the same steps used to install Terminus and Nord. This seems to fix the issue.
<figure>
    <img style="width:800px" src="/images/activity/20240201_Nord_Theme_3.png">
    <figcaption>Maybe not the most noticeable theme, but it has a snowy type of snugness to it</figcaption>
</figure>