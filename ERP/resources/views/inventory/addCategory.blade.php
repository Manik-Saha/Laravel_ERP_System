@extends('welcome')
@section('content')
<div class="content-page">
                <!-- Start content -->
 <div class="content">
<div class="row">
      <div class="col-lg-12 mx-auto " style="padding:auto;">
        <p>
          <a href="{{route('category')}}" class="btn btn-success"style="text-decoration: none;">All Category</a>

        </p>
    
        @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
        <form action="{{route('storecategory')}}" method="POST">
          @csrf
    <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label class="text-info">Catagory Name</label>
              <input type="text" class="form-control"style="font-size:20px;font-weight: bold;" placeholder="Category Name" name="name" >
            </div>
</div>
         
          <button type="submit" class="btn btn-success" >Submit</button>
</div>
        </form>
      </div>
    </div>
</div>

@endsection()