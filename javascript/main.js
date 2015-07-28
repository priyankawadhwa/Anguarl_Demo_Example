<div ng-controller="FormController">
	<form class="form-horizontal" ng-submit="submitForm(userForm.$valid)"  role="form" name="userForm" novalidate>
		<div class="form-group">
			<label class="control-label col-sm-2" for="email">Name:</label>
			<div class="col-sm-5">
				<input type="text" ng-maxlength="15" ng-minlength="3" ng-model="name" class="form-control" name="name" id="name" placeholder="Enter name" required>
				<div class="validate" ng-show="userForm.name.$dirty && userForm.name.$invalid">
					<small class="errorMessage" ng-show="userForm.name.$error.required">
						Name is required.
					</small>
					 <small class="errorMessage" ng-show="userForm.name.$error.minlength">
						Name should be at least 3 characters long
					</small>
					<small class="errorMessage" ng-show="userForm.name.$error.maxlength">
						Name cannot exceed 15 characters
					</small>
				</div>
			</div>
		</div>
		
		<div class="form-group">
			<label class="control-label col-sm-2" for="email">UserName:</label>
			<div class="col-sm-5">
				<input type="text" ng-minlength="5" ng-maxlength="15" ng-model="username" class="form-control" name="username" id="username" placeholder="Enter username" required>
				<div class="validate" ng-show="userForm.username.$dirty && userForm.username.$invalid">
					<small class="errorMessage" ng-show="userForm.username.$error.required">
						UserName is required.
					</small>
					 <small class="errorMessage" ng-show="userForm.username.$error.minlength">
						UserName should be at least 5 characters long
					</small>
					<small class="errorMessage" ng-show="userForm.username.$error.maxlength">
						UserName cannot exceed 15 characters
					</small>
				</div>
			</div>
		</div>
		
		<div class="form-group">
			<label class="control-label col-sm-2" for="email">Email:</label>
			<div class="col-sm-5">
				<input type="email" ng-model="email" class="form-control" name="email" id="email" placeholder="Enter email" required>
				<div class="validate" ng-show="userForm.email.$dirty && userForm.email.$invalid">
					<small class="errorMessage" ng-show="userForm.email.$error.required">
						Email is required.
					</small>
					 <small class="errorMessage" ng-show="userForm.email.$error.email">
						Please enter a valid email.
					</small>
				</div>
			</div>
		</div>
		
		<div class="form-group">
			<label class="control-label col-sm-2" for="pwd">Password:</label>
			<div class="col-sm-5">          
				<input type="password" ng-minlength="4" ng-maxlength="10" ng-model="pwd" class="form-control" name="pwd" id="pwd" placeholder="Enter password" required>
				<div class="validate" ng-show="userForm.pwd.$dirty && userForm.pwd.$invalid">
					<small class="errorMessage" ng-show="userForm.pwd.$error.required">
						Choose a password
					</small>
					 <small class="errorMessage" ng-show="userForm.pwd.$error.minlength">
						Password should be atleast 4 characters long
					</small>
					<small class="errorMessage" ng-show="userForm.pwd.$error.maxlength">
						Password cannot exceed 10 characters
					</small>
				</div>
			</div>
		</div>
		
		<div class="form-group">        
			<div class="col-sm-offset-2 col-sm-10">
				<button type="submit" class="btn btn-primary">Register!</button>
			</div>
		</div>
		
		<div class="form-group">        
			<div class="col-sm-offset-2 col-sm-10">
				<label>Already Registered ? <a href="#signIn">Sign In</a></label>
			</div>
		</div>		
	</form>
</div>
