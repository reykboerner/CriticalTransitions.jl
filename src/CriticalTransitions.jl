module CriticalTransitions

using Formatting, Dates, JLD2, HDF5, ProgressBars, ProgressMeter
using DynamicalSystems
using OrdinaryDiffEq, StochasticDiffEq, DiffEqNoiseProcess
using LinearAlgebra, StaticArrays

include("StochSystem.jl")
include("utils.jl")

include("io/io.jl")
include("noiseprocesses/gaussian.jl")
include("systemanalysis/stability.jl")
include("trajectories/simulation.jl")

include("../systems/fitzhughnagumo.jl")

export StochSystem, State
export equilib, fixedpoints
export simulate, relax, transition, transitions
export tocds, make_jld2, make_h5, sys_string, sys_info, intervals_to_box

export FitzHughNagumo, FitzHughNagumo!
export idfunc, idfunc!

export EM, I # functions inherited from dependencies

end # module CriticalTransitions
