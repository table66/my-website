 # Materials

- **Features Description:** The Global Material Database allows for the definition of complex materials using experimental data or parameterized models. The Material Database stores the material data to be used in the simulation. It also provides an interface to change material properties like color, mesh order, and fit parameters. User could import materials from “Standard” database to “User” and “Project” material database, and also from “User” material database to“Project” material database.
- **Standard & User & Project Material Database:** Material database includes standard, user,and project material database. 

## 1. Standard Material Database

The standard material database includes two parts, one is material list, and another is material property plot. The material list includes a number of common materials, when creating a new simulation, the standard database will be loaded. And the materials in the standard material database can be imported into “User” and “Project” material database. The default materials cannot be edited directly

![material1](material1.PNG )

### Material List:

![material2](material2.PNG )

1) ***ID:*** ID
   
2) ***Name:*** Material name.
   
3) ***Mesh Order:*** Decides how overlapping objects are meshed in the simulation.
   
4) ***Color:*** Material color.
   
5) ***Type:*** Types of material, two types are included, there are Normal material and List data as
follows.

        Normal Material: Non-dispersive materials.

        List Data: Dispersive materials, Materials whose dielectric permittivity changes with wavelength settings, displayed in tabular form.

6) ***Last Modified:*** Last modified time.
   
7) ***Import to User/ Import to Project:*** Import materials to user or project database.
   
8) ***Export:*** Export materials according to user needs.

###  Materials in the Standard Material Database

The following materials are included in the standard material database.

| ID | Name                             | Mesh order | Type   |
| -- | -------------------------------- | --------------- | ----- | ------- |
| 1  | Air                              | 2               | Normal Material |
| 2  | Al (Aluminium) - Palik           | 2               | List Data |
| 3  | Al (Aluminium) - CRC             | 2               | List Data |
| 4  | Au (Gold) - CRC                  | 2               | List Data |
| 5  | Au (Gold) - Johnson and Christy  | 2               | List Data |
| 6  | Au (Gold) - Palik                | 2               | List Data |
| 7  | Ge (Germanium) - CRC             | 2               | List Data |
| 8  | Ge (Germanium) - Palik           | 2               | List Data |
| 9  | Si (Silicon) - Palik             | 2               | List Data |
| 10 | SiO2 (Glass) - Palik             | 2               | List Data |
| 11 | Si3N4 (Silicon Nitride) - Kischkat | 2               | List Data |
| 12 | Si3N4 (Silicon Nitride) - Phillip | 2               | List Data |
| 13 | Ag (Silver) - CRC                | 2               | List Data |
| 14 | Pt (Platinum) - Palik            | 2               | List Data |
| 15 | Ta (Tantalum) - CRC              | 2               | List Data |
| 16 | TiN                              | 2               | List Data |
| 17 | Cu (Copper) - Palik              | 2               | List Data |
| 18 | Fe (Iron) - CRC                  | 2               | List Data |
| 19 | W (Tungsten) - CRC               | 2               | List Data |
| 20 | Ti (Titanium) - Palik            | 2               | List Data |
| 21 | Ti (Titanium) - CRC              | 2               | List Data |
| 22 | Sn (Tin) - Palik                 | 2               | List Data |
| 23 | H2O (Water) - Palik              | 2               | List Data |
| 24 | Cr (Chromium) - CRC              | 2               | List Data |
| 25 | Pd (Palladium) - Palik           | 2               | List Data |
| 26 | InAs - Palik                      | 2               | List Data |
| 27 | Ag (Silver) - Palik (1-10um)      | 2               | List Data |
| 28 | Ag (Silver) - Johnson and Christy | 2               | List Data |
| 29 | W (Tungsten) - Palik              | 2               | List Data |
| 30 | Fe (Iron) - Palik                 | 2               | List Data |
| 31 | Cr (Chromium) - Palik             | 2               | List Data |
| 32 | Al2O3 - Palik                     | 2               | List Data |
| 33 | In (Indium) - Palik               | 2               | List Data |
| 34 | Cu (Copper) - CRC                 | 2               | List Data |
| 35 | Ni (Nickel) - CRC                 | 2               | List Data |
| 36 | V (Vanadium) - CRC           | 2    | List Data |           |
| 37 | InP - Palik                  | 2    | List Data |           |
| 38 | GaAs - Palik                 | 2    | List Data |           |
| 39 | Ni (Nickel) - Palik          | 2    | List Data |           |
| 40 | Rh (Rhodium) - Palik         | 2    | List Data |           |
| 41 | Ag (Silver) - Palik (0-2um)  | 2    | List Data |           |
| 42 | PEC                          | 2    |           |           |

###  Material Properties:

![material3](material3.PNG )

***Plot:*** User can view each material property in this plot area via clicking a certain material in material list, also can view properties they are interested in via two options in the bottom of plot. Material properties include “Color”, “Name”, “Mesh Order”, “Wavelength”, “Frequency”, “n,k”-Re(refractive index)&Im(refractive index), “εr′,εr″”-Re(relative permittivity)&Im(relative permittivity), ε’,σ-Re(relative permittivity)&conductivity

1) ***Material Data & Model Fitting***
Material Data tab: User can view each material property in this list via double clicking a certain material in material list. Material properties include “Color”, “Name”, “Mesh Order”, “Wavelength”, “Frequency”, “n,k”-Re(refractive index)&Im(refractive index),“εr′,εr″”-Re(relative permittivity)&Im(relative permittivity), and “εr′,σ ”-Re(relative permittivity)&conductivity

***Material Data :***

![material4](material4.PNG )

***Model Fitting:*** (Currently, the model fitting feature is not available and is still in the
development process.)

 ## User Material Database
 The User material database, a database that stores materials defined by user. The user material database includes two parts, one is material list, and another is material property plot. User can copy or delete a selected material, The materials in the “User” material database can be imported to the “Project” material database. And users also can export materials according to their needs.

![material5](material5.PNG )

 ### Material List:
1) ***ID:*** ID
   
2) ***Name:*** Material name.
   
3) ***Mesh Order:*** Decides the priority of overlapping objects to be meshed. Structures with higher
mesh order will occupy the same space with their refractive index, instead of those with lower
mesh order.

4) ***Color:*** You can set color according to your own preference.
   
5) ***Type:*** Types of material, two types are included, there are Normal material and List data as
follows.

        Normal Material: Non-dispersive materials.

        List Data: Dispersive materials, Materials whose dielectric permittivity changes with wavelength settings, displayed in tabular form.

1) ***Last Modified:*** Last modified time.
 
2) ***Import to Project:*** Import materials to project database.
   
3) ***Export:*** Export materials according to user needs.

### Material Properties:

![material6](material6.PNG )

***Plot:*** User can view each material property in this plot area via clicking a certain material in material list, also can view properties they are interested in via two options in the bottom of plot. Material properties include “Color”, “Name”, “Mesh Order”, “Wavelength”, “Frequency”, “n,k”-Re(refractive index)&Im(refractive index), “εr′,εr″”-Re(relative permittivity)&Im(relative permittivity)，ε’,σ-Re(relative permittivity)&conductivity.

1) **Material Data & Model Fitting:**

Material Data Tab: User can view and set each material property in this list via double clicking a certain material in material list. Material properties include “Color”, “Name”, “Mesh Order”, “Wavelength”, “Frequency”, “n,k”-Re(refractive index)&Im(refractive index), “εr′,εr”-Re(relative permittivity)&Im(relative permittivity), and “εr′,σ”-Re(relative permittivity)&conductivity.

&rarr;  ***Anisotropy:*** Two options in this drop-down menu, “None” and “Diagonal”, when diagonal
option is checked, user can create FDTD, FDE, or EME anisotropic optical material in the “User Material Database” window.


&rarr;  ***Solver physics:*** Anisotropic materials react to eletric field with directional dependent electric
displacement. Permitivity can be represented by a 9 element tensor εij

![material7](material7.PNG )

In general, this tensor can be diagnonalized by a proper choice of coordinate system, e.g. in
principle dielectric axes. So it is simplified to

![material8](material8.PNG )

&rarr;  ***Diagonal anisotropic materials:*** To define an anisotropic material, set the Anisotropy field in
the material database to Diagonal and assign the parameters for each diagonal component.

![material9](material9.PNG )

### Model Fitting: (Under development.)

## Project Material Database
The project material database stores project materials. The database would inherit materials from the project automatically, which may contain standard materials and user materials in the project.And the materials in the standard and user material database can be imported to project material database. Users also can add, delete and export materials according to their needs.

