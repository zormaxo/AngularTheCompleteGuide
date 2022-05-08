import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountService: AccountService) {}
  ngOnInit(): void {
    this.accountService.eventTest.subscribe((a) => console.log(a));
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChanges(status);
    this.accountService.statusUpdated.emit(status);
  }
}
