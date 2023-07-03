---
sidebar_position: 3
---

# FDTD 

## Definition

The Finite-Difference Time-Domain (FDTD) method is a rigorous and powerful tool for modeling nano-scale optical devices. FDTD solves Maxwell’s equations directly without any physical approximation, and the maximum problem size is limited only by the extent of the computing power available.


## How does FDTD work and what problem does it solve?

The FDTD method solves Maxwell’s equations on a mesh and computes E and H at grid points spaced Δx, Δy, and Δz apart, with E and H interlaced in all three spatial dimensions. FDTD includes the effects of scattering, transmission, reflection, absorption, etc. FDTD is a time-domain solution, but frequency analysis is also possible through the use of the Fast Fourier Transform (FFT) and the Discrete Fourier Transform (DFT).