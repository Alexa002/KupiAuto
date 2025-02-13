import { Component, OnInit } from '@angular/core';
import { Member } from '../../_models/member';
import { MembersService } from '../../_services/members.service';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from "../member-card/member-card.component";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member-list',
  imports: [CommonModule, MemberCardComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit{
  members$: Observable<Member[]>;
  
  
  constructor(private memberService: MembersService) {}
  


  ngOnInit(): void {
    this.members$ = this.memberService.getMembers();
  }

  
}
