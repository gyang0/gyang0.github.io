My first attempt at writing a formal math paper. It's kinda clumsy but was fun to do. Learned quite a bit about LaTeX.

There were some points that are hastily patched around - like the difference between an H field and a B field, or the difference between a D field and an E field. A satisfying justification for Maxwell's addition to Ampere's Law was hard to find as well. <a href="https://academicworks.cuny.edu/cgi/viewcontent.cgi?article=1156&context=kb_pubs#page=14" target="_blank">One paper</a> that Google turned up gave some experimental verifications for the equations, but said that "Experimental evidence for the Maxwell-Ampere equation is not as extensive" as the other laws.

There was also the question of whether using other electromagnetism laws to prove Maxwell's equations was illogical, since Maxwell's equations are supposed to be the foundation of everything else in electromagnetism. But without the laws, I would have had to use experimental data or some more fundamental concepts to derive them. So I just used the laws and it s to have worked out. Lenz's Law and the Continuity Equation were especially helpful.`],
            
            
Finding a derivation for Faraday's Law was particularly memorable. At one point, I got
$$ \iint_S (\nabla \times \textbf{E}) \cdot d\textbf{S} = -\frac{d}{dt}\iint_S \textbf{B} \cdot d\textbf{S} $$

It was tempting to just remove the integrals, since "Surface S is arbitrary." But I wasn't sure whether that would work, since they were flux integrals and not surface integrals. Maybe I could've done that...would have saved some time.

After spending time with the second page of Google search results, I found an equation for the flux across a moving surface in <a href="https://web.archive.org/web/20210413205303/http://sgpwe.izt.uam.mx/files/users/uami/jdf/proyectos/Derivar_inetegral.pdf" target="_blank">this article</a> (page 622), but I kept getting an answer that was off:
$$ \frac{d}{dt}\iint_S \textbf{B} \cdot d\textbf{S} = \iint_S (\nabla \cdot \textbf{B})\textbf{v} \cdot d\textbf{S} - \int_C (\textbf{v} \times \textbf{B}) \cdot dL + \iint_S \textbf{B} \cdot d\textbf{S}$$


After another more round of citation chasing, the <a href="https://www.google.com/books/edition/The_Classical_Theory_of_Electricity_and/9rTQAAAAMAAJ?hl=en&gbpv=1&printsec=frontcover&pg=PA40" target="_blank">original source</a> was fortunately available on Google Books. It looks like there was just one misprint or something in the first article. The original equation is
$$ \frac{d}{dt}\iint_S \textbf{B} \cdot d\textbf{S} = \iint_S (\nabla \cdot \textbf{B})\textbf{v} \cdot d\textbf{S} - \int_C (\textbf{v} \times \textbf{B}) \cdot dL + \iint_S \frac{\partial \textbf{B}}{\partial t} \cdot d\textbf{S} $$

With a $ \frac{\partial \textbf{B}}{\partial t} $ instead of a $ \textbf{B} $ in the third integral. This gave me the right result.

Anyways, the actual paper:
<div style="display: block; width: 70%; margin: 0 auto">
    <embed align="center" src="/data/documents/20240114_maxwells_equations.pdf" width="100%" height="1000" type="application/pdf">
</div>