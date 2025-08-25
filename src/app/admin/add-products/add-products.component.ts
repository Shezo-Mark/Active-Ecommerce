import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-add-products',
  standalone: false,
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.scss'
})

export class AddProductsComponent {
 editor!: Editor;
  html = '';
colors: any[] = [
  {ColorName:'Gray',Value:false},
  {ColorName:'Red',Value:false},
  {ColorName:'Blue',Value:false},
  {ColorName:'Green',Value:false}
];

  constructor(public product: ProductsService){
    this.colors.forEach(() => this.colorsFormArray.push(new FormControl(false)));
  }
  ngOnInit() {
    this.editor = new Editor();

  }
  toolbar: Toolbar = [
    ['bold', 'italic', 'underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
     ['undo', 'redo'],
  ];
  ngOnDestroy() {
    this.editor.destroy();
  }

  AddProductForm = new FormGroup({
     ProductName: new FormControl('', [Validators.required]),
     ProductStatus: new FormControl('', [Validators.required]),
     ProductDate: new FormControl('', [Validators.required]),
     ProductPrice: new FormControl('', [Validators.required]),
     ProductDescription: new FormControl('', [Validators.required]),
     Colors: new FormArray([])
  })
  get colorsFormArray(): FormArray {
  return this.AddProductForm.get('Colors') as FormArray;
}
  addProducts(){
    if(this.AddProductForm.invalid){
      console.log('data send faild')
      return;
    }else{
      const selectedColors = this.colorsFormArray.value
    .map((checked: boolean, i: number) => (checked ? this.colors[i].ColorName : null))
    .filter((v: any) => v !== null);
    const payload = {
      ...this.AddProductForm.value,
      Colors: selectedColors   // overwrite boolean array with actual names
    };
     this.product.productsAdd(payload).subscribe((res) => {
        const description = this.AddProductForm.value.ProductDescription;
      if(res){
         console.log(res , 'data send faild');
         console.log('Editor value:', description);
      }
     })
    }
  }

}
