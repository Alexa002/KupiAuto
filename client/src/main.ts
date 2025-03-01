import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import routes from './app/app.routes';
import { provideToastr } from 'ngx-toastr';
import { errorInterceptor } from './app/_interceptors/error.interceptor';
import { jwtInterceptor } from './app/_interceptors/jwt.interceptor';
import { loadingInterceptor } from './app/_interceptors/loading.interceptor';
import { TimeagoClock, TimeagoDefaultClock, TimeagoDefaultFormatter, TimeagoFormatter, TimeagoIntl } from 'ngx-timeago';


bootstrapApplication(AppComponent, {
  providers:[
    provideAnimations(),
    provideHttpClient(withInterceptors([jwtInterceptor, loadingInterceptor, errorInterceptor])),
    provideToastr({positionClass: 'toast-bottom-right'}),
    provideRouter(routes),
    TimeagoIntl, 
    { provide: TimeagoClock, useClass: TimeagoDefaultClock },
    { provide: TimeagoFormatter, useClass: TimeagoDefaultFormatter },
    
    
    
   
  ]
})
  .catch((err) => console.error(err));