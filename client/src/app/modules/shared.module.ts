import { SharedTabComponent } from '../components/shared-tab/shared-tab.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatStepperModule } from '@angular/material/stepper';
import { OrderModule } from 'ngx-order-pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { TransmissionService } from 'src/app/services/transmission.service';
import { ItemResolverService } from 'src/app/resolvers/item-resolver.service';
import { PartyResolverService } from 'src/app/resolvers/party-resolver.service';
import { LocationResolverService } from 'src/app/resolvers/location-resolver.service';
import { OrderReleaseResolverService } from 'src/app/resolvers/order-release-resolver.service';
import { TransactionResolverService } from 'src/app/resolvers/transaction-resolver.service';
import { AuditResolverService } from 'src/app/resolvers/audit-resolver.service';
import { DashboardResolverService } from 'src/app/resolvers/dashboard-resolver.service';
import { OrderBaseResolverService } from 'src/app/resolvers/order-base-resolver.service';
import { TrackingEventResolverService } from 'src/app/resolvers/tracking-event-resolver.service';
import { ShipmentResolverService } from 'src/app/resolvers/shipment-resolver.service';
import { SettingResolverService } from 'src/app/resolvers/setting-resolver.service';
import { AuthInterceptor } from 'src/app/AuthInterceptor';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';

@NgModule({
  declarations: [SharedTabComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    DragDropModule,
    ScrollingModule,
    MatCheckboxModule,
    MatTabsModule,
    MatExpansionModule,
    MatTreeModule,
    MatInputModule,
    NgxPaginationModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatStepperModule,
    OrderModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatRadioModule,
    MatChipsModule,
    MatBadgeModule,
    MatTooltipModule,
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    DragDropModule,
    ScrollingModule,
    MatCheckboxModule,
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    MatTreeModule,
    MatInputModule,
    NgxPaginationModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatStepperModule,
    OrderModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatRadioModule,
    MatChipsModule,
    SharedTabComponent,
    MatBadgeModule,
    MatTooltipModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        TransmissionService,
        ItemResolverService,
        PartyResolverService,
        LocationResolverService,
        OrderReleaseResolverService,
        TransactionResolverService,
        AuditResolverService,
        DashboardResolverService,
        OrderBaseResolverService,
        TrackingEventResolverService,
        ShipmentResolverService,
        SettingResolverService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
      ],
    };
  }
}
