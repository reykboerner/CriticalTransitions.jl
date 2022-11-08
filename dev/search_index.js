var documenterSearchIndex = {"docs":
[{"location":"man/utils/#Convenience-functions-and-types","page":"Utilities","title":"Convenience functions and types","text":"","category":"section"},{"location":"man/utils/#Functions","page":"Utilities","title":"Functions","text":"","category":"section"},{"location":"man/utils/#StochSystem-utility-functions","page":"Utilities","title":"StochSystem utility functions","text":"","category":"section"},{"location":"man/utils/","page":"Utilities","title":"Utilities","text":"tocds(sys::StochSystem; state=zeros(sys.dim))\nσg(sys::StochSystem)\np(sys::StochSystem)\nsys_info(sys::StochSystem)\nsys_string(sys::StochSystem; verbose=true)","category":"page"},{"location":"man/utils/#CriticalTransitions.tocds-Tuple{StochSystem}","page":"Utilities","title":"CriticalTransitions.tocds","text":"tocds(sys::StochSystem; state=zeros(sys.dim))\n\nConverts a StochSystem into a ContinuousDynamicalSystem of DynamicalSystems.jl.\n\n\n\n\n\n","category":"method"},{"location":"man/utils/#CriticalTransitions.sys_info-Tuple{StochSystem}","page":"Utilities","title":"CriticalTransitions.sys_info","text":"sys_info(sys::StochSystem)\n\nPrints StochSystem info of sys in structured format.\n\n\n\n\n\n","category":"method"},{"location":"man/utils/#CriticalTransitions.sys_string-Tuple{StochSystem}","page":"Utilities","title":"CriticalTransitions.sys_string","text":"sys_string(sys::StochSystem; verbose=true)\n\nReturns StochSystem info of sys as a string.\n\nKeyword arguments\n\nverbose: if true, the string includes additional descriptions. \n\n\n\n\n\n","category":"method"},{"location":"man/utils/#Noise-functions-for-sys.g","page":"Utilities","title":"Noise functions for sys.g","text":"","category":"section"},{"location":"man/utils/","page":"Utilities","title":"Utilities","text":"idfunc(u, p, t)\nidfunc!(du, u, p, t)","category":"page"},{"location":"man/utils/#CriticalTransitions.idfunc-Tuple{Any, Any, Any}","page":"Utilities","title":"CriticalTransitions.idfunc","text":"idfunc(u, p, t)\n\nIdentity function for noise function StochSystem.g (out-of-place).\n\n\n\n\n\n","category":"method"},{"location":"man/utils/#CriticalTransitions.idfunc!-NTuple{4, Any}","page":"Utilities","title":"CriticalTransitions.idfunc!","text":"idfunc!(du, u, p, t)\n\nIdentity function for noise function StochSystem.g (in-place).\n\n\n\n\n\n","category":"method"},{"location":"man/utils/#sys.dim-dimensional-box","page":"Utilities","title":"sys.dim-dimensional box","text":"","category":"section"},{"location":"man/utils/","page":"Utilities","title":"Utilities","text":"intervals_to_box(bmin::Vector, bmax::Vector)","category":"page"},{"location":"man/utils/#CriticalTransitions.intervals_to_box-Tuple{Vector, Vector}","page":"Utilities","title":"CriticalTransitions.intervals_to_box","text":"intervals_to_box(bmin::Vector, bmax::Vector)\n\nGenerates a box from specifying the interval limits in each dimension.\n\nbmin (Vector): lower limit of the box in each dimension\nbmax (Vector): upper limit\n\nExample\n\nintervals_to_box([-2,-1,0], [2,1,1]) returns a 3D box of dimensions [-2,2] × [-1,1] × [0,1].\n\n\n\n\n\n","category":"method"},{"location":"man/utils/#Saving-data","page":"Utilities","title":"Saving data","text":"","category":"section"},{"location":"man/utils/","page":"Utilities","title":"Utilities","text":"make_jld2(text::String, relpath::String=\"\")\nmake_h5(text::String, relpath::String=\"\")","category":"page"},{"location":"man/utils/#CriticalTransitions.make_jld2","page":"Utilities","title":"CriticalTransitions.make_jld2","text":"make_jld2(text::String, relpath::String=\"\")\n\nCreates/opens a .jld2 file with filename of the format \"ddmmyy_text.jld2\". Relative file path specified by relpath (must end with /).\n\nSee make_h5 for generating a .h5 file.\n\n\n\n\n\n","category":"function"},{"location":"man/utils/#CriticalTransitions.make_h5","page":"Utilities","title":"CriticalTransitions.make_h5","text":"make_h5(text::String, relpath::String=\"\")\n\nCreates/opens a .h5 file with filename of the format \"ddmmyy_text.h5\". Relative file path specified by relpath (must end with /).\n\nSee make_jld2 for generating a .jld2 file.\n\n\n\n\n\n","category":"function"},{"location":"man/utils/#Miscellaneous","page":"Utilities","title":"Miscellaneous","text":"","category":"section"},{"location":"man/utils/","page":"Utilities","title":"Utilities","text":"is_iip(f::Function)","category":"page"},{"location":"man/utils/#CriticalTransitions.is_iip-Tuple{Function}","page":"Utilities","title":"CriticalTransitions.is_iip","text":"is_iip(f::Function)\n\nAsserts if f is in-place (true) or out-of-place (false).\n\nWarning: This function simply checks if there is a ! in the function name. Thus, if you do not add a ! to in-place function names (as recommended by the Julia style guide), this test will not work.\n\n\n\n\n\n","category":"method"},{"location":"man/utils/#Types","page":"Utilities","title":"Types","text":"","category":"section"},{"location":"man/utils/","page":"Utilities","title":"Utilities","text":"Parameters = Union{Vector{Float64}, Vector{Int64}, Nothing}\nCovMatrix = Union{Matrix, UniformScaling{Bool}, Diagonal{Bool, Vector{Bool}}}\nState = Union{Vector, SVector}","category":"page"},{"location":"man/dev/#Functionality-under-development","page":"Development stage","title":"Functionality under development","text":"","category":"section"},{"location":"man/dev/#Pathspace-Langevin-MCMC-sampling-for-the-FitzHugh-Nagumo-system","page":"Development stage","title":"Pathspace Langevin MCMC sampling for the FitzHugh-Nagumo system","text":"","category":"section"},{"location":"man/dev/","page":"Development stage","title":"Development stage","text":"fhn_pathspace_sampling\nFitzHughNagumoSPDE","category":"page"},{"location":"man/dev/#CriticalTransitions.fhn_pathspace_sampling","page":"Development stage","title":"CriticalTransitions.fhn_pathspace_sampling","text":"fhn_pathspace_sampling(ϵ, σ, T, dz; kwargs...)\n\nIntegrates the FitzHughNagumoSPDE in virtual time to generate pathspace Langevin MCMC samples.\n\nThe initial condition is a straight line between the fixed points R and L (for the default FHN parameters).\n\nArguments\n\nϵ (float): time scale parameter\nσ (float): noise strength\nT (float): total physical time\ndz (float): physical time step\n\nKeyword arguments\n\ndt (float): virtual time step\ntmax (float): total virtual time\na (float): first diagonal element of covariance matrix\nstart (string): Starting point of the path. Either \"R\" or \"L\" (default \"R\")\noutputevery (int): save the path at every `outputevery`-th instance in virtual time\nβ, α, γ, κ, Ι: FHN parameters\n\nReturns\n\nA list of two matrices, each with columns = coordinates and rows = virtual time instances. The first matrix contains the u coordinates, the second matrix the v coordinates.\n\n\n\n\n\n","category":"function"},{"location":"man/dev/#CriticalTransitions.FitzHughNagumoSPDE","page":"Development stage","title":"CriticalTransitions.FitzHughNagumoSPDE","text":"FitzHughNagumoSPDE(u, p, t)\n\nSystem definition for the pathspace SPDE corresponding to the FitzHughNagumo system.\n\nThe parameter vector must contain the following (in this order):\n\nϵ (float): time scale parameter\nβ (float): FHN parameter\nα (float): FHN parameter\nγ (float): FHN parameter\nκ (float): FHN parameter\nΙ (float): FHN parameter\na (float): First diagonal element of covariance matrix \nσ (float): noise strength\ndz (float): physical time step\n\n\n\n\n\n","category":"function"},{"location":"man/noise/#Noise-processes","page":"Noise processes","title":"Noise processes","text":"","category":"section"},{"location":"man/noise/","page":"Noise processes","title":"Noise processes","text":"gauss(sys::StochSystem)","category":"page"},{"location":"man/noise/#CriticalTransitions.gauss-Tuple{StochSystem}","page":"Noise processes","title":"CriticalTransitions.gauss","text":"gauss(sys::StochSystem)\n\nReturns a Wiener process with dimension sys.dim and covariance matrix sys.Σ.\n\nThis function is based on the CorrelatedWienerProcess of DiffEqNoiseProcess.jl, a component of DifferentialEquations.jl. The initial condition of the process is set to the zero vector at t=0.\n\n\n\n\n\n","category":"method"},{"location":"quickstart/#Quickstart","page":"Quickstart","title":"Quickstart","text":"","category":"section"},{"location":"quickstart/#Installation","page":"Quickstart","title":"Installation","text":"","category":"section"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"As this module is not published yet, there are two ways to access it:","category":"page"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"Install from GitHub\nEnter the Julia package manager julia> ]\ntype add https://github.com/reykboerner/CriticalTransitions.jl.git\nLoad module locally\nClone the repo: git clone https://github.com/reykboerner/CriticalTransitions.jl.git\nIn Julia, include the module file: include(\"PATH/src/CriticalTransitions.jl\"), where PATH is the relative path to the repo you just cloned\nLoad the module: using .CriticalTransitions","category":"page"},{"location":"quickstart/#Basic-usage","page":"Quickstart","title":"Basic usage","text":"","category":"section"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"The general workflow of CriticalTransitions essentially follows two steps:","category":"page"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"Define your system (see Defining a StochSystem)\nInvestigate the system by calling methods (see Methods)","category":"page"},{"location":"quickstart/#Methods","page":"Quickstart","title":"Methods","text":"","category":"section"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"Currently the following functions are implemented to analyze a StochSystem.","category":"page"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"Pages = [\"man/simulation.md\", \"man/systemanalysis.md\"]","category":"page"},{"location":"man/stochsystem/#Defining-a-StochSystem","page":"Defining a StochSystem","title":"Defining a StochSystem","text":"","category":"section"},{"location":"man/stochsystem/","page":"Defining a StochSystem","title":"Defining a StochSystem","text":"A StochSystem defines a stochastic dynamical system of the form","category":"page"},{"location":"man/stochsystem/","page":"Defining a StochSystem","title":"Defining a StochSystem","text":"textdvec x = f(vec x(t)  p_f)  textdt + sigma g(vec x(t)   p_g)  Sigma cdot textdmathcalN  ","category":"page"},{"location":"man/stochsystem/","page":"Defining a StochSystem","title":"Defining a StochSystem","text":"where vec x in mathbbR^textdim and mathcal N denotes a stochastic process.","category":"page"},{"location":"man/stochsystem/","page":"Defining a StochSystem","title":"Defining a StochSystem","text":"An instance of StochSystem is created via StochSystem(f, pf, dim [, σ [, g, pg, Σ , process]]), taking the following arguments:","category":"page"},{"location":"man/stochsystem/","page":"Defining a StochSystem","title":"Defining a StochSystem","text":"f (Function): Dynamical ODE rule describing the drift term of the system, corresponding to f in the ODEProblem of DifferentialEquations. Can be defined in-place (f!(du, u, p, t)) or out-of-place (f(u,p,t)).\npf (Vector or Nothing): Parameter vector for the drift term.\ndim (Int64): Dimension of the system.\nσ (Float64): Noise intensity. Defaults to 1.0.\ng (Function): Dynamical ODE rule describing the noise term of the system. Same format as f. Defaults to idfunc.\npg (Vector or Nothing): Parameter vector of the noise term.\nΣ (Matrix): Noise covariance matrix. Defaults to I (identity matrix).\nprocess (String): Noise process. Defaults to white-gauss (independent n-dimensional Brownian motion).","category":"page"},{"location":"man/stochsystem/#Shortcut-methods","page":"Defining a StochSystem","title":"Shortcut methods","text":"","category":"section"},{"location":"man/stochsystem/","page":"Defining a StochSystem","title":"Defining a StochSystem","text":"StochSystem(f, pf, dim)\nStochSystem(f, pf, dim, σ)\nStochSystem(f, pf, dim, σ, Σ)","category":"page"},{"location":"man/stochsystem/","page":"Defining a StochSystem","title":"Defining a StochSystem","text":"StochSystem","category":"page"},{"location":"man/stochsystem/#CriticalTransitions.StochSystem","page":"Defining a StochSystem","title":"CriticalTransitions.StochSystem","text":"StochSystem(f, pf, dim, σ, g, pg, Σ, process)\n\nDefines a stochastic dynamical system in CriticalTransitions.jl. See documentation.\n\n\n\n\n\n","category":"type"},{"location":"man/simulation/#Simulating-the-system","page":"Simulating the system","title":"Simulating the system","text":"","category":"section"},{"location":"man/simulation/#SDE-integration","page":"Simulating the system","title":"SDE integration","text":"","category":"section"},{"location":"man/simulation/","page":"Simulating the system","title":"Simulating the system","text":"simulate(sys::StochSystem, init::State; kwargs...)\nrelax(sys::StochSystem, init::State; kwargs...)","category":"page"},{"location":"man/simulation/#CriticalTransitions.simulate-Tuple{StochSystem, Union{Vector, StaticArraysCore.SVector}}","page":"Simulating the system","title":"CriticalTransitions.simulate","text":"simulate(sys::StochSystem, init::State; kwargs...)\n\nSimulates the StochSystem sys forward in time, starting at initial condition init.\n\nThis function uses the SDEProblem functionality of DifferentialEquations.jl.\n\nKeyword arguments\n\ndt=0.01: time step of integration\ntmax=1e3: total time of simulation\nsolver=EM(): numerical solver. Defaults to Euler-Mayurama\ncallback=nothing: callback condition\nprogress=true: shows a progress bar during simulation\nkwargs...: keyword arguments for solve(SDEProblem)\n\nFor more info, see SDEProblem.\n\nWarning: This function has only been tested for the EM() solver and out-of-place SDEFunctions.\n\n\n\n\n\n","category":"method"},{"location":"man/simulation/#CriticalTransitions.relax-Tuple{StochSystem, Union{Vector, StaticArraysCore.SVector}}","page":"Simulating the system","title":"CriticalTransitions.relax","text":"relax(sys::StochSystem, init::State; kwargs...)\n\nSimulates the deterministic dynamics of StochSystem sys in time, starting at initial condition init.\n\nThis function integrates sys.f forward in time, using the ODEProblem functionality of DifferentialEquations.jl. Thus, relax is identical to simulate when setting the noise strength sys.σ = 0.\n\nKeyword arguments\n\ndt=0.01: time step of integration\ntmax=1e3: total time of simulation\nsolver=Euler(): numerical solver. Defaults to explicit forward Euler\ncallback=nothing: callback condition\nkwargs...: keyword arguments for solve(ODEProblem)\n\nFor more info, see ODEProblem.  For stochastic integration, see simulate.\n\nWarning: This function has only been tested for the Euler() solver.\n\n\n\n\n\n","category":"method"},{"location":"man/simulation/#Noise-induced-transitions","page":"Simulating the system","title":"Noise-induced transitions","text":"","category":"section"},{"location":"man/simulation/","page":"Simulating the system","title":"Simulating the system","text":"transition(sys::StochSystem, x_i::State, x_f::State; kwargs...)\ntransitions(sys::StochSystem, x_i::State, x_f::State, N=1; kwargs...)","category":"page"},{"location":"man/simulation/#CriticalTransitions.transition-Tuple{StochSystem, Union{Vector, StaticArraysCore.SVector}, Union{Vector, StaticArraysCore.SVector}}","page":"Simulating the system","title":"CriticalTransitions.transition","text":"transition(sys::StochSystem, x_i::State, x_f::State; kwargs...)\n\nGenerates a sample transition from point x_i to point x_f.\n\nThis function simulates sys in time, starting from initial condition x_i, until entering a sys.dim-dimensional ball of radius rad_f around x_f.\n\nKeyword arguments\n\nrad_i=0.1: radius of ball around x_i\nrad_f=0.1: radius of ball around x_f\ncut_start=true: if false, returns the whole trajectory up to the transition\ndt=0.01: time step of integration\ntmax=1e3: maximum time when the simulation stops even x_f has not been reached\nsolver=EM(): numerical solver. Defaults to Euler-Mayurama\nprogress: shows a progress bar with respect to tmax\n\nOutput\n\n[path, times, success]\n\npath (Matrix): transition path (size [dim × N], where N is the number of time points)\ntimes (Vector): time values (since start of simulation) of the path points (size N)\nsuccess (bool): if true, a transition occured (i.e. the ball around x_f has been reached), else false\nkwargs...: keyword arguments passed to simulate\n\nSee also transitions, simulate.\n\n\n\n\n\n","category":"method"},{"location":"man/simulation/#CriticalTransitions.transitions","page":"Simulating the system","title":"CriticalTransitions.transitions","text":"transitions(sys::StochSystem, x_i::State, x_f::State, N=1; kwargs...)\n\nGenerates an ensemble of N transition samples of sys from point x_i to point x_f.\n\nThis function repeatedly calls the transition function to efficiently generate an ensemble of transitions, which are saved to a file or returned as an array of paths. Multi-threading is enabled.\n\nKeyword arguments\n\nrad_i=0.1: radius of ball around x_i\nrad_f=0.1: radius of ball around x_f\ncut_start=true: if false, returns the whole trajectory up to the transition\nNmax: number of attempts before the algorithm stops even if less than N transitions occurred.\ndt=0.01: time step of integration\ntmax=1e3: maximum time when the simulation stops even x_f has not been reached\nsolver=EM(): numerical solver. Defaults to Euler-Mayurama\nprogress: shows a progress bar with respect to Nmax\nsavefile: if nothing, no data is saved to a file. To save to a file, see below.\n\nSee also transition.\n\nSaving data to file\n\nThe savefile keyword argument allows saving the data to a .jld2 or .h5 file. To do so:\n\nCreate and open a file by typing file = jld2open(\"filename.jld2\", \"a+\") or file = h5open(\"filename.h5\", \"cw\"). This requires JLD2.jl/HDF5.jl; the convenience functions make_jld2, make_h5 provide this out of the box.\nPass the label file to the savefile argument of transitions.\nDon't forget to close(file) at the end.\n\nOutput\n\n[samples, times, idx, N_fail]\n\nsamples (Array of Matrices): sample paths. Each path i has size (dim × Ni), where Ni is the number of path points\ntimes (Array of Vectors): time values (since simulation start) of path points for each path\nidx (Array): list of sample indices i that produced a transition\nN_fail (Int): number of samples that failed to produce a transition\n\nAn example script using transitions is available here.\n\n\n\n\n\n","category":"function"},{"location":"man/systems/#Predefined-dynamical-systems","page":"Predefined systems","title":"Predefined dynamical systems","text":"","category":"section"},{"location":"man/systems/#FitzHugh-Nagumo-system","page":"Predefined systems","title":"FitzHugh-Nagumo system","text":"","category":"section"},{"location":"man/systems/","page":"Predefined systems","title":"Predefined systems","text":"A 2D system given by","category":"page"},{"location":"man/systems/","page":"Predefined systems","title":"Predefined systems","text":"beginaligned\nfracdudt = frac1epsilon left( -alpha u^3 + gamma u - kappa v + I right) \nfracdvdt = -beta v + u  \nendaligned","category":"page"},{"location":"man/systems/","page":"Predefined systems","title":"Predefined systems","text":"where epsilon is the parameter of time scale separation between the state variables u and v. The parameters alpha 0, beta 1, gamma0, and kappa0 are real constants, and I denotes a driving term.","category":"page"},{"location":"man/systems/","page":"Predefined systems","title":"Predefined systems","text":"FitzHughNagumo(u, p, t)\nFitzHughNagumo!(du, u, p, t)","category":"page"},{"location":"man/systems/#CriticalTransitions.FitzHughNagumo-Tuple{Any, Any, Any}","page":"Predefined systems","title":"CriticalTransitions.FitzHughNagumo","text":"FitzHughNagumo(u, p, t)\n\nOut-of-place definition of the FitzHugh-Nagumo system.\n\nSee also FitzHughNagumo!.\n\n\n\n\n\n","category":"method"},{"location":"man/systems/#CriticalTransitions.FitzHughNagumo!-NTuple{4, Any}","page":"Predefined systems","title":"CriticalTransitions.FitzHughNagumo!","text":"FitzHughNagumo!(du, u, p, t)\n\nIn-place definition of the FitzHugh-Nagumo system.\n\nSee also FitzHughNagumo.\n\n\n\n\n\n","category":"method"},{"location":"#CriticalTransitions.jl","page":"Home","title":"CriticalTransitions.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A Julia package for the numerical investigation of critical transitions in stochastic dynamical systems.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Building on DifferentialEquations.jl and DynamicalSystems.jl, this newly developing package aims to provide a toolbox for stochastic dynamics, with a focus on tipping phenomena and metastability.","category":"page"},{"location":"","page":"Home","title":"Home","text":"info: Current features\nStability analysis: fixed points, linear stability, basins of attraction, basin boundary\nStochastic simulation: Gaussian noise, uncorrelated and correlated, additive and multiplicative\nTransition path sampling: parallelized ensemble sampling","category":"page"},{"location":"","page":"Home","title":"Home","text":"ukw: Planned features\nRare event simulation: importance sampling, AMS\nLarge deviations: instantons and quasipotentials\nEdge tracking\nLangevin MCMC path sampling\n...?","category":"page"},{"location":"","page":"Home","title":"Home","text":"Developers: Reyk Börner, Ryan Deeley, and Raphael Römer","category":"page"},{"location":"","page":"Home","title":"Home","text":"This work is part of the CriticalEarth project.","category":"page"},{"location":"tutorial/#Tutorial","page":"Tutorial","title":"Tutorial","text":"","category":"section"},{"location":"tutorial/#Example:-FitzHugh-Nagumo-model","page":"Tutorial","title":"Example: FitzHugh-Nagumo model","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Consider the FitzHugh-Nagumo model,","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"beginaligned\nfracdudt = frac1epsilon left( -alpha u^3 + gamma u - kappa v + I right) \nfracdvdt = -beta v + u  \nendaligned","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"where epsilon is the parameter of time scale separation between the state variables u and v. The parameters alpha 0, beta 1, gamma0, and kappa0 are real constants, and I denotes a driving term.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Let's investigate this system under stochastic forcing.","category":"page"},{"location":"tutorial/#System-definition","page":"Tutorial","title":"System definition","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"First, we need to translate the system equations above into Julia code.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"This works by defining a function f(u,p,t) which takes as input a vector u of state variables (u,v), a vector p of parameters, and time t. The function must return a StaticArray du of flow increments (du, dv).","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"function FitzHughNagumo(u,p,t)\n    u, v = u\n    ϵ, β, α, γ, κ, I = p[1]\n\n    du = (-α*u^3 + γ*u - κ*v + I)/ϵ\n    dv = -β*v + u\n\n    SVector{2}([du, dv])\nend","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"tip: In-place vs. out-of-place\nThe function FitzHughNagumo(u,p,t) is defined in-place. It is also possible to define the system out-of-place as FitzHughNagumo!(du,u,p,t). For more info, see here.","category":"page"},{"location":"tutorial/#StochSystem","page":"Tutorial","title":"StochSystem","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Next, we turn the FitzHughNagumo system into a stochastic dynamical system. Suppose we would like to force both state variables u and v with additive, uncorrelated Gaussian noise of intensity sigma. This is the default case. We simply write","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"# Parameters (ϵ, β, α, γ, κ, I)\np = [1., 3., 1., 1., 1., 0.]\nσ = 0.2\n\n# StochSystem\nsys = StochSystem(FitzHughNagumo, p, 2, σ)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The 2 in the last line indicates that the system has two dimensions.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"note: Multiplicative and/or correlated noise\nOf course, it is also possible to define more complicated noise processes than simple additive white noise. This is done by specifying a custom noise function and covariance matrix in the StochSystem definition. For more info, see Defining a StochSystem.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"That's it! Now we can throw the toolbox of CriticalTransitions at our stochastic FitzHugh-Nagumo system sys.","category":"page"},{"location":"tutorial/#Find-stable-equilibria","page":"Tutorial","title":"Find stable equilibria","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"For the parameters chosen above, the FitzHugh-Nagumo system is bistable. Let's compute the stable fixed points by calling the fixedpoints function.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"# Calculate fixed points\neqs, eigs, stab = fixedpoints(sys, [-2,-2], [2,2])\n\n# Store the two stable fixed points\nfp1, fp2 = eqs[stab]","category":"page"},{"location":"tutorial/#Stochastic-simulation","page":"Tutorial","title":"Stochastic simulation","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Using the simulate function, we now run a simulation of our system starting out from the fixed point fp1:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"sim = simulate(sys, fp1, dt=0.01, tmax=1e3)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"In the keyword arguments, we have specified the time step dt and total duration tmax of the numerical time integration.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The simulated trajectory is stored in sim as a matrix with 2 rowscorresponding to the state variables u, v, and 10,000 columns corresponding to the time steps.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Let's plot the result. Did the trajectory tip to the other basin of attraction?","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using PyPlot\nscatter([fp1[0], fp2[0]], [fp1[1], fp2[1]], c=[\"r\"])\nplot(sim[0,:], sim[1,:])","category":"page"},{"location":"man/systemanalysis/#Analyzing-a-system's-stability-properties","page":"Stability analysis","title":"Analyzing a system's stability properties","text":"","category":"section"},{"location":"man/systemanalysis/#Fixed-points","page":"Stability analysis","title":"Fixed points","text":"","category":"section"},{"location":"man/systemanalysis/","page":"Stability analysis","title":"Stability analysis","text":"equilib(sys::StochSystem, state::State; kwargs...)\nfixedpoints","category":"page"},{"location":"man/systemanalysis/#CriticalTransitions.equilib-Tuple{StochSystem, Union{Vector, StaticArraysCore.SVector}}","page":"Stability analysis","title":"CriticalTransitions.equilib","text":"equilib(sys::StochSystem, state::State; kwargs...)\n\nReturns the equilibrium solution of the system sys for given initial condition state.\n\nWarning: This algorithm simply evolves the deterministic system forward in time until a steady-state condition is satisfied. Thus, the algorithm may output a false solution if it gets stuck in a quasi-equilibrium, or slowly evolving state. For more robust results, use fixedpoints.\n\nKeyword arguments:\n\nabstol = 1e-5: steady-state condition. Simulation ends when the rate of change (Euclidean distance in state space) of the state falls below abstol.\ntmax = 1e5: maximum simulation time before the algorithm stops even if the steady-state condition is not reached.\ndt = 0.01: time step of the ODE solver.\nsolver = Euler(): ODE solver used for evolving the state.\n\n\n\n\n\n","category":"method"},{"location":"man/systemanalysis/#CriticalTransitions.fixedpoints","page":"Stability analysis","title":"CriticalTransitions.fixedpoints","text":"fixedpoints(sys::StochSystem, bmin::Vector, bmax::Vector)\n\nReturns fixed points, their eigenvalues and stability of the system sys within the state space volume defined by bmin and bmax.\n\nThis is a wrapper around the fixedpoints function of DynamicalSystems.jl.\n\nInput\n\nbmin (Vector): lower limits of the state space box to be considered, as a vector of coordinates\nbmax (Vector): upper limits\nalternatively box (IntervalBox) can replace bmin and bmax\n\nExample: fixedpoints(sys, [-2,-1,0], [2,1,1]) finds the fixed points of the 3D system sys in a cube defined by the intervals [-2,2] × [-1,1] × [0,1].\n\nOutput\n\n[fp, eigs, stable]\n\nfp: Dataset of fixed points\neigs: vector of Jacobian eigenvalues of each fixed point\nstable: vector of booleans indicating the stability of each fixed point (true=stable, false=unstable)\n\nAdditional methods\n\nfixedpoints(sys::StochSystem, box)\n\n\n\n\n\n","category":"function"},{"location":"man/systemanalysis/#Basins-of-attraction","page":"Stability analysis","title":"Basins of attraction","text":"","category":"section"},{"location":"man/systemanalysis/","page":"Stability analysis","title":"Stability analysis","text":"basins(sys::StochSystem, A, B, C, H; kwargs)\nbasinboundary(X, Y, h; kwargs...)","category":"page"},{"location":"man/systemanalysis/#CriticalTransitions.basins-Tuple{StochSystem, Any, Any, Any, Any}","page":"Stability analysis","title":"CriticalTransitions.basins","text":"basins(sys::StochSystem, A, B, C, H; kwargs...)\n\nComputes the basins of attraction of StochSystem sys on a plane spanned by the points A, B, C and limited by the box H.\n\n\n\n\n\n","category":"method"},{"location":"man/systemanalysis/#CriticalTransitions.basinboundary-Tuple{Any, Any, Any}","page":"Stability analysis","title":"CriticalTransitions.basinboundary","text":"basinboundary(X, Y, h; kwargs...)\n\nComputes the basin boundary for given basins of attraction.\n\n\n\n\n\n","category":"method"}]
}
