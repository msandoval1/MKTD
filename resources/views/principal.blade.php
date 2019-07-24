@extends('template.index')

@section('title','MKT OnDemand')

@section('content')
    <div class="container-fluid">
        <div class="row">
            @include('system.timeline')
        </div>
    </div>
@endsection