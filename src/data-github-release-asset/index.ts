/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubReleaseAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the release asset to retrieve
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset#asset_id DataGithubReleaseAsset#asset_id}
  */
  readonly assetId: number;
  /**
  * Whether to download the asset file content into the `file_contents` attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset#download_file_contents DataGithubReleaseAsset#download_file_contents}
  */
  readonly downloadFileContents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset#id DataGithubReleaseAsset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Owner of the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset#owner DataGithubReleaseAsset#owner}
  */
  readonly owner: string;
  /**
  * Name of the repository to retrieve the release asset from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset#repository DataGithubReleaseAsset#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset github_release_asset}
*/
export class DataGithubReleaseAsset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_release_asset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGithubReleaseAsset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGithubReleaseAsset to import
  * @param importFromId The id of the existing DataGithubReleaseAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGithubReleaseAsset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_release_asset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset github_release_asset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubReleaseAssetConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubReleaseAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'github_release_asset',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.11.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assetId = config.assetId;
    this._downloadFileContents = config.downloadFileContents;
    this._id = config.id;
    this._owner = config.owner;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_id - computed: false, optional: false, required: true
  private _assetId?: number; 
  public get assetId() {
    return this.getNumberAttribute('asset_id');
  }
  public set assetId(value: number) {
    this._assetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetIdInput() {
    return this._assetId;
  }

  // browser_download_url - computed: true, optional: false, required: false
  public get browserDownloadUrl() {
    return this.getStringAttribute('browser_download_url');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // download_file_contents - computed: false, optional: true, required: false
  private _downloadFileContents?: boolean | cdktf.IResolvable; 
  public get downloadFileContents() {
    return this.getBooleanAttribute('download_file_contents');
  }
  public set downloadFileContents(value: boolean | cdktf.IResolvable) {
    this._downloadFileContents = value;
  }
  public resetDownloadFileContents() {
    this._downloadFileContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadFileContentsInput() {
    return this._downloadFileContents;
  }

  // file_contents - computed: true, optional: false, required: false
  public get fileContents() {
    return this.getStringAttribute('file_contents');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asset_id: cdktf.numberToTerraform(this._assetId),
      download_file_contents: cdktf.booleanToTerraform(this._downloadFileContents),
      id: cdktf.stringToTerraform(this._id),
      owner: cdktf.stringToTerraform(this._owner),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asset_id: {
        value: cdktf.numberToHclTerraform(this._assetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      download_file_contents: {
        value: cdktf.booleanToHclTerraform(this._downloadFileContents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
