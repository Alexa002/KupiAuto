import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../_services/members.service';
import { Member } from '../../_models/member';
import { ActivatedRoute } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryModule, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { HttpClientModule } from '@angular/common/http';
import { TimeagoClock, TimeagoModule,  } from "ngx-timeago";
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-member-detail',
  imports: [CommonModule,TabsModule,NgxGalleryModule, HttpClientModule, TimeagoModule,],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css'
})
export class MemberDetailComponent implements OnInit{
  member: Member;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  
  constructor(private memberService: MembersService, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.loadMember();

    this.galleryOptions =[
      {
        width: '500px',
        height:'500px',
        imagePercent:100,
        thumbnailsColumns:4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview:false
      }
    ]

    
 }

 getImages(): NgxGalleryImage[]{
  const imageUrls = [];
  for(const photo of this.member.photos)
  {
    imageUrls.push({
      small: photo?.url,
      medium:photo?.url,
      big:photo?.url
    })
  }
  return imageUrls;
 }

loadMember(){
  this.memberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member => {
    this.member = member;
    this.galleryImages = this.getImages();
  })
}

}
